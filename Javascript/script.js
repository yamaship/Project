$(document).ready(function () {
  $('[data-url]').each(function (e, DOM) {
    $(DOM).load($(DOM).data('url'))
  }) 
   
  setTimeout(function(){ 
    $('.carousel').carousel()
  },5000)
})