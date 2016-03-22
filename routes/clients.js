var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'), //used to manipulate POST
    fs = require('fs'); // to remove files

//Any requests to this controller must pass through this 'use' function
//Copy and pasted from method-override
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

//build the REST operations at the base for blobs
//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/')
    //GET all clients
    .get(function(req, res, next) {
        //retrieve all clients from Monogo
        mongoose.model('Client').find({}, function (err, blobs) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/clients folder. We are also setting "blobs" to be an accessible variable in our jade view
                    html: function(){
                        res.render('clients/index', {
                              // title: 'All my Clients',
                              "db" : blobs
                          });
                    },
                    //JSON response will show all blobs in JSON format
                    json: function(){
                        res.json(blobs);
                    }
                });
              }
        });
    })
    //POST a new blob
    .post(function(req, res) {
        // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
        try {avatar = req.files.sampleFile.name }

        catch(err) {avatar = 'standard.png'}
        		// }
        		frequenza = 208-(0.7*req.body.eta)
        		var data = {
        		avatar: avatar,
        		nome: req.body.nome,
        		cognome: req.body.cognome,
        		altezza: req.body.altezza,
        		peso: req.body.peso,
        		telefono: req.body.telefono,
                mail: req.body.mail,
        		note: req.body.note,
        		frequenza: frequenza,
        		lipmin: (frequenza*65)/100,
        		lipmax: (frequenza*75)/100,
        		aeromin:(frequenza*75)/100,
        		aeromax:(frequenza*85)/100,
        		aneromin: (frequenza*85)/100,
        		aneromax: (frequenza*92)/100
        	}
        //   var user = new Client(data)
        //call the create function for our database
        mongoose.model('Client').create(data, function (err, client) {
              if (err) {
                  res.send("There was a problem adding the information to the database.");
              } else {
                  //Client has been created
                  console.log('POST creating new client: ' + client);
                  res.format({
                      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
                    html: function(){
                        // If it worked, set the header so the address bar doesn't still say /adduser

                        // // And forward to success page
                        res.redirect("/");
                        // res.send(client)
                    },
                    //JSON response will show the newly created client
                    json: function(){
                        res.json(client);
                    }
                });
              }
        })
    });

/* GET New Client page. */

router.get('/new', function(req, res) {
    res.render('clients/new');
});
router.route('/:client_id')
    .put(function(req,res){
        // find document by ID
        mongoose.model('Client').findById(req.params.client_id, function (err, client){
            // update it
            client.update(req.body, function(err, clientID){
                if (err) {
                    res.json('Error: ' +err);
                }
                else{
                    res.json(client)
                }
            })
        });

    })

    .get(function(req,res){
      mongoose.model('Client').findById(req.params.client_id, function(err, client){
        if (err) {
          res.json(err)
        } else {
          res.json(client)
        }
      });
    })
  //delete client
    .delete(function(req, res) {
      // #Done:40 Delete avatar from uploads folder
      mongoose.model('Client').findById(req.params.client_id, function(err, client){
          if (err) {
              res.json(err)
          } else {
              //   remove avatar from server if it's not the standard
              if (client.avatar != 'standard.png')
              try {
                  fs.unlinkSync('./public/uploads/'+client.avatar)
              } catch (e) {
                  console.log(e)
              }
              //remove client from Mongo
              client.remove(function (err, client){
                  if (err) {
                      res.json(client)
                  }
                  else {
                      res.json('rimosso')
                  }
              });
            }
        });
     });
// #Done:20 route for edit Client info
    // .get(function(req, res){
    //   mongoose.model('Client').findById(req.params.client_id, function(err, client){
    //     if (err)
    //       res.json(err)
    //     res.json(client);
    //   });
    // })
// #Done:30 route for show Client info

module.exports = router;
