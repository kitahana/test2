$(document).ready(function(){
//DOM 構築後のタイミングで処理される

  $('.Box').on('click', function(){
    console.log('osaretayo');
  });

  $('#id').on('click', function(){
  var elem = '<a href="#">次ページ</a>';
    // $("#id").html(elem);
    // $("#id").text(elem);
    // $("#id").css("color","#ff0");
    // $("#id").hide(1000);
    //
    // $("#id").show(1000);
    // $("#id").prepend(elem);
    // $("#id").append(elem);
    // $("#id").empty();
    $("#id").remove();
  });

  $('#hide').on('click', function(){
  // var elem = '#ex';
        $("#ex").hide(2000);
  });
  $('#show').on('click', function(){
  // var elem = '#ex';
        $("#ex").show(2000);
  });

  var count = 0;
  $('#show').on('click', function(){
      count++;
      $("#ex").text(count);
      console.log(count);
  });

  $('#ex').hide().fadeIn(4000);

  var kakikukeko = '<p>かきくけこ</p>';
  $('#ex').append(kakikukeko);

  $('#ex').css({'background-color':'black','color':'white'});

  var aiueo = '<p>あいうえお</p>';
  $('#ex').prepend(aiueo);

  var sasisuseso = '<p>さしすせそ</p>';
  $('#ex').append(sasisuseso);

  $('#ex p:odd').css({'background-color':'white','color':'black'});
});
