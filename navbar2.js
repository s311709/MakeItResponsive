window.onresize = windowStr; //Check every time window resizes
window.onload = windowStr; //Instantly run the function once when the page is loaded to account for phones and tablets who dont resize the window
var tall = 1;
window.onscroll = windowStr;

function windowStr(){
    if (window.innerWidth <= 1100){
        document.getElementById("hamburgContainer").style.display="block";
        document.getElementById("container").style.display="none";
        document.getElementsByClassName("wrapper")[0].style.marginTop = "0px";
    }
    else if (window.innerWidth >= 1100 && document.getElementById("tint").style.display == "block"){
        tall = tall+1
        document.body.style.overflowY="visible";
        document.getElementById("hamburgContainer").classList.toggle("change");
        document.getElementById("hamburgContainer").style.display="none";
        document.getElementById("container").style.display="block";
        document.getElementById("tint").style.display="none";
        document.body.overflowY="visible";
        document.getElementById("navHidden").style.display="none";
        document.getElementsByClassName("wrapper")[0].style.marginTop = "100px";

    }
    else{
        document.getElementById("hamburgContainer").style.display="none";
        document.getElementById("container").style.display="block";
        document.getElementById("tint").style.display="none";
        document.body.overflowY="visible";
        document.getElementById("navHidden").style.display="none";
        document.getElementsByClassName("wrapper")[0].style.marginTop = "100px";

    }
    if (window.scrollY >= 100){
        document.getElementsByClassName("navigationbar")[0].style.backgroundColor="#FFD52D";
        document.getElementsByClassName("navigationbar")[0].style.height="50px";
        document.getElementsByClassName("navigationbar")[0].style.borderBottom = "2px black outset";
        document.getElementById("bilde").style.width="50px";
        document.getElementById("bilde").style.height="50px";
        document.getElementsByClassName("topnav")[0].style.top="50px";
        for (i = 0; i <= 4; i++){
            document.getElementsByClassName("navTag")[i].style.fontSize = "20pt";
            document.getElementsByClassName("navTag")[i].style.paddingTop = "0.5rem";
            document.getElementsByClassName("navTag")[i].style.marginRight = "33px";

        }

    }
    else{
        document.getElementsByClassName("navigationbar")[0].style.backgroundColor=null;
        document.getElementsByClassName("navigationbar")[0].style.height="100px";
        document.getElementsByClassName("navigationbar")[0].style.borderBottom = null;
        document.getElementById("bilde").style.width="100px";
        document.getElementById("bilde").style.height="100px";
        document.getElementsByClassName("topnav")[0].style.top="100px";
        for (i = 0; i <= 4; i++){
            document.getElementsByClassName("navTag")[i].style.fontSize = "20pt";
            document.getElementsByClassName("navTag")[i].style.paddingTop = "3rem";
            document.getElementsByClassName("navTag")[i].style.marginRight = "33px";
        }
    }
    if (document.getElementById("hamburgContainer").style.display == "block" || window.innerWidth >= 1100 && window.innerWidth <= 1400){
        document.getElementsByClassName("topnav")[0].style.top="0px";
        document.getElementsByClassName("topnav")[0].style.left="0px";
        document.getElementsByClassName("topnav")[0].style.width="100vw";
        document.getElementsByClassName("n")[0].style.paddingLeft="8vw";
        document.getElementsByClassName("n")[0].style.paddingRight="8vw";
        document.getElementsByClassName("n")[1].style.paddingLeft="8vw";
        document.getElementsByClassName("n")[1].style.paddingRight="8vw";
        document.getElementsByClassName("n")[2].style.paddingLeft="8vw";
        document.getElementsByClassName("n")[2].style.paddingRight="8vw";
        document.getElementsByClassName("n")[3].style.paddingLeft="8vw";
        document.getElementsByClassName("n")[3].style.paddingRight="8vw";
        if (window.innerWidth >= 1100 && window.innerWidth <= 1400 && window.scrollY >= 100){
            document.getElementsByClassName("topnav")[0].style.top="50px";
        }
        else if (window.innerWidth >= 1100 && window.innerWidth <= 1400 && window.scrollY <= 100){
            document.getElementsByClassName("topnav")[0].style.top="100px";
        }
    }
}
/* denne funksjonen skal gi samme effekt som onclick når man trykker enter eller mellomrom*/

 function handleBtnKeyDown(x) {
  if (event.key === "" || event.key === "Spacebar" ||event.key === "Enter") {
     // prevent default action to stop scrolling when space is pressed
    event.preventDefault();
    x.classList.toggle("change");
    forandreNav();
    toggleButton(event.target);
  }
}

function hamburgFunc(x) {
    x.classList.toggle("change");
    forandreNav();
    toggleButton(event.target);
}

function toggleButton(element) {
  var pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
}

function toggleButton(element) {
  var pressed  = (element.getAttribute("aria-expanded") === "true");
  element.setAttribute("aria-expanded", !expanded);
}

function forandreNav(){
    tall = tall+1;
    if (tall %2 == 0){
        console.log("mod2");
        document.getElementById("tint").style.display="block";
        document.body.style.overflowY="hidden";
        document.getElementById("tint").style.zIndex="9";
        document.getElementById("hamburgContainer").style.zIndex="10";
        document.getElementById("navHidden").style.zIndex="10";
        document.body.overflowY="hidden";
        document.getElementById("navHidden").style.display="block";
    }
    else{
        console.log("mod1");
        document.getElementById("tint").style.display="none";
        document.getElementById("hamburgContainer").style.display="block";
        document.body.style.overflowY="visible";
        document.getElementById("navHidden").style.display="none";
    }
}
