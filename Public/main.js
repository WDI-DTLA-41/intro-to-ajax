$('#user').click(function(x){
  $.get('/user',function(data){
    $('body').append(data.data.name);
  })
});


// $('form').on('submit', function(event){
//   var str = $( "form" ).serialize();
//   $.post('/calc',{value:str})
//   .done(function(sum){
//       alert(sum.value + "sum is here as data");
//   });

// });

$('button').click(function(evt){
  var numbers = $('input').val()
  var $h1 = $('h1');
  $.post('/calc', {calc: numbers}, function (response) {
    // console.log(response);
    if(response.data){
      $h1.text("");
      $h1.append(response.data.answer)
    }
    else if(response.error) {
      $h1.text("");
      $h1.append(response.error.message)
    }
  });
})
