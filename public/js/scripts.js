
  $(document).ready(function() {
    // clients()


  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$('.modal-trigger').leanModal();


  });


// $( document ).ready(function() {
// // 	user = .findUser()
// // 	$.each(user, function(index, value) {
// // 		if ($('.empty').length){
// //     $('.empty').first().html('<h3>'+ value['nome']+'</h3>')
// //     $('.empty').first().removeClass('empty')
// //     }
// //     else{
// //     	$('.container').append('<div class="row add"><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div></div>')
// //     $('.empty').first().html('<h3>'+ value['nome']+'</h3>')
// //     $('.empty').first().removeClass('empty')
// //     }
// // });
// getData()
// });


// function populate(data){
//     $.each(data, function(index, value) {
//         if ($('.empty').length){
//     $('.empty').first().html('<h3>'+ value['nome']+'</h3>')
//     $('.empty').first().removeClass('empty')
//     }
//     else{
//         $('.container').append('<div class="row add"><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div><div class="col s3 light-blue lighten-3 empty"><a onclick="add()"><i class="large fa fa-plus-square"></i></a></div></div>')
//     $('.empty').first().html('<h3>'+ value['nome']+'</h3>')
//     $('.empty').first().removeClass('empty')
//     }

// }

$(document).on('click', '#scheda .collapsible-body input', function() {
	$('.choose').append('<img src="../images/Esercizi/'+this.value+'">')
});
// sidebar handlers
$(document).on('click', '.mainMenu li', function() {
	 $('.mainMenu li').removeClass('active')
   $(this).addClass('active')
   $('#mainContent > div').addClass('hide')
   $('.'+this.id).removeClass('hide')
   $('.collapsible-body')
});
//ajax requests
// function clients(){
//     $.ajax({
//       type: "GET",
//       dataType: 'json',
//       url: "/clients",
//       async: true,
//       contentType: "application/json; charset=utf-8",
//       success: function (data) {
//         $('.contacts').html('')
//         $.each(data, function(key, value){
//           var div = $('<div class="new" style="display: none;"><div class="client yellowfont card"><div class="person card-image"><img class="activator" src="uploads/'+value.avatar+'"></div><div class="card.content"><div class="row"><div class="col s1"><i class="material-icons">delete</i></div><div class="col s11"><h4>'+value.nome+'</h4><h4>'+value.cognome+'</h4></div></div></div></div></div>')
//           div.appendTo('.contacts').show('slow')
//         });
//         },
//       error: function(){
//         console.log('something gone wrong')
//         }
//       });
//     }
function addDay(num){
  console.log(num)
  console.log(typeof(num))
  $('.newDay').parent().remove()
  $('.cardScheduler').append('<div class="row"><h3>Giorno '+num+'</h3></div><div class="row" id="#giorno_'+num+'"></div><div class="row"><h3 class="newDay">Aggiungi Giorno <i class="fa fa-plus-square left" onclick="addDay('+(num+1)+')"></h3></div></div>')
}
