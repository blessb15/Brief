$(Document).ready(function(){

  var pages = ['.page-1', '.page-2', '.page-3'];

  $('.footer-nav-down').click(function(){
    for(var i = 0; i < pages.length; i++){
      console.log(pages.length);
      console.log(i);
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

});
