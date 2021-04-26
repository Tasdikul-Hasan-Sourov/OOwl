 new WOW().init();

 window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$('.business').hide();
$('button').click(function(){   
  if(this.id == 'btn1'){
    $('.user').show();
    $('.business').hide();
  }else{
    $('.user').hide();
    $('.business').show();
  }
})