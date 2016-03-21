var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

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
    //GET all blobs
    .get(function(req, res, next) {
        //retrieve all blobs from Monogo
        mongoose.model('Client').find({}, function (err, blobs) {
              if (err) {
                  return console.error(err);
              } else {
                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.format({
                      //HTML response will render the index.jade file in the views/blobs folder. We are also setting "blobs" to be an accessible variable in our jade view
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

router.delete('/:client_id', function(req, res) {
      mongoose.model('Client').remove({
           _id : req.params.client_id
       }, function(err, todo) {
           if (err)
               res.send(err);

           // get and return all the todos after you create another
           mongoose.model('Client').find(function(err, clients) {
               if (err)
                   res.send(err)
               res.json(clients);
           });
       });
   });


module.exports = router;
