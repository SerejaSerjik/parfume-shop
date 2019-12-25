function toggleHeader() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementsByClassName("header")[0].classList.add("header-sticky");
    console.log('lol')
  } else {
    document.getElementsByClassName("header")[0].classList.remove("header-sticky");
  }
} 

window.onscroll = function() {toggleHeader()};