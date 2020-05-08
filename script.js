function  cursusChange() {
var x = document.getElementById("cursusSelect").value;

switch (x) {
  case "UI_UX":
    titel = "UI/UX design"
    text  = "Learn advanced design principles to create optimal userfriendly designs. This course will help you to create the best experience for your website vistors. \n \n This course costs €299.-"
    break;
  case "webdev":
    titel = "Webdev 101"
    text  = "Learn the basics of web development and release your first website. This course will set you up with a professional website you made yourself and that you own all rights for. \n \n This course costs €149.- \n (Hosting not included)"
    break;
  case "SEO":
    titel = "SEO basics"
    text  = "Optimize your website for search engines, so everyone can see your website. This course will teach you the basics of SEO, wich is a must have skill nowadays when owning a website. \n This course costs 199.-"
    break;
  default:

}
  document.getElementById("cursusTitel").innerHTML = titel;
  document.getElementById("beschrijving").innerHTML = text;
}

function submit(){
  alert("Your requested has been send!")
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "20px";
    document.getElementById("logo").style.height = "40px";
  } else {
    document.getElementById("header").style.fontSize = "25px";
    document.getElementById("logo").style.height = "70px";
  }
}
