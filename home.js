let mybutton = document.getElementById("myBtn");
let navBg = document.querySelector(".header");
let logo=document.querySelector("img");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
   
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navBg.style.backgroundColor='white';
   
    logo.setAttribute('src','logo.webp');
  } else {
    
    mybutton.style.display = "none";
    navBg.style.backgroundColor='';
    logo.setAttribute('src','logo-alt.webp');
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


