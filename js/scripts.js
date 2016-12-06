$(Document).ready(function(){

  console.log("hey");

  var pages = ['.page-1', '.page-2', '.page-3'];

  $('.footer-nav-down').click(function(){
    for(var i = 0; i < pages.length; i++){
      if ($(pages[i]).hasClass('active')){
        if(!(i+1 >= pages.length)){
          $(pages[i+1]).addClass('active');
          $(pages[i]).removeClass('active');
          break;
        } else if (i+1 >= pages.length) {
          $(pages[0]).addClass('active');
          $(pages[i]).removeClass('active');
          break;
        }
      }
    }
  });

});
