// Navbar Scripts
$(document).ready(function(){
  	$(window).scroll(function(){
  		if($(window).scrollTop() > 100 ){
			  $('.my-navbar').addClass('navbar-scroll');
  		} else{
			  $('.my-navbar').removeClass('navbar-scroll');
  		}
  	});
  });



// // Navbar Animation
// window.onscroll = changePos;

// function changePos() {
// 	var header = document.getElementByClassName("my-navbar");
// 	if (window.pageYOffset > 100) {
// 		header.style.position = "absolute";
// 		header.style.top = pageYOffset + "px";
// 		header.style.height = "70px";
// 	}else {
// 		header.style.position = "";
// 		header.style.top = "";
// 		header.style.height = "";
// 	}
// }
