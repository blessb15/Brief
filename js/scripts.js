$(Document).ready(function(){

  var pages = ['.page-1', '.page-2', '.page-3'];

  $('.footer-nav-down').click(function(){
    for(var i = 0; i < pages.length; i++){
      if ($(pages[i]).hasClass('active')){
        $(pages[i]).removeClass('active');
        if(i + 1 < pages.length){
          $(pages[i + 1]).addClass('active');
          break;
        } else if (i + 1 >= pages.length) {
          $(pages[0]).addClass('active');
          $(pages[i]).removeClass('active');
          break;
        }
      }
    }
  });

  $('.select-img-1').click(function(){
    $('.img-2').removeClass('active');
    $('.img-3').removeClass('active');
    $('.img-1').addClass('active');
    $('.select-img-1').addClass('current');
    $('.select-img-3').removeClass('current');
    $('.select-img-2').removeClass('current');

  });
  $('.select-img-2').click(function(){
    $('.img-1').removeClass('active');
    $('.img-3').removeClass('active');
    $('.img-2').addClass('active');
    $('.select-img-2').addClass('current');
    $('.select-img-3').removeClass('current');
    $('.select-img-1').removeClass('current');

  });
  $('.select-img-3').click(function(){
    $('.img-1').removeClass('active');
    $('.img-2').removeClass('active');
    $('.img-3').addClass('active');
    $('.select-img-3').addClass('current');
    $('.select-img-2').removeClass('current');
    $('.select-img-1').removeClass('current');
  });

});
