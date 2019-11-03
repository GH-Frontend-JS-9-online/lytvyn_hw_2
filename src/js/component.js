$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 10);
  });
  $('#nav-icon').click(function () {
    $('#menu').css({
      'display' : 'flex',
    })
  });
  $('[data-modal]').click(function (e) {
    e.preventDefault();
    
    $($(this).attr('href')).css({
      'display' : 'flex',
    })
  });
  
  $('.close, .nav-list li a').click(function(){
    $(this).parents('.modal').hide('200');
  })
  

  $('.arr_down').click(function () {
    var destination = $(".about").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });
  
  $('.cookies-btn').click(function(e){
    e.preventDefault();
    $(this).parents('.cookies').hide('300');
  })
  
  
  	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal .modal-content"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.parent().hide(200); // скрываем его
		}
	});
  
  $('.works-link').click(function(){
    $('#work .work-img img').attr('src', $(this).data('src'));
  })
  
    $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });
  
});