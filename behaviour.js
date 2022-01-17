window.onscroll = function(){freezeNav()};
var navBar = document.getElementById("navbar");
var sticky = navBar.offsetTop;

function freezeNav()
{
  if(window.pageYOffset >= sticky)
  {
    navBar.classList.add("frozen");
  }
  else
  {
    navBar.classList.remove("frozen");
  }
}
