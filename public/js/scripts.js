
  $(document).ready(function() {



  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
$('.modal-trigger').leanModal();


  });

function add(){
	location.href = 'add';

}

function clientSend(){

dash.registerUser($('#nome').val().trim(), $('#cognome').val().trim(), $('#indirizzo').val().trim(), $('#peso').val().trim(), $('#telefono').val().trim());


}
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

$(document).on('click', '.mainMenu li', function() {
	 $('.mainMenu li').removeClass('active')
   $(this).addClass('active')
   $('#mainContent > div').addClass('hide')
   $('.'+this.id).removeClass('hide')
   $('.collapsible-body')
});
