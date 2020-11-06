window.onresize = windowStr; //Check every time window resizes
window.onload = windowStr; //Instantly run the function once when the page is loaded to account for phones and tablets who dont resize the window
var tall = 1;
window.onscroll = windowStr;

function windowStr(){
    if (window.innerWidth <= 1100){
        document.getElementById("hamburgContainer").style.display="block";
        document.getElementById("container").style.display="none";
    }
    else if (window.innerWidth >= 1100 && document.getElementById("tint").style.display == "block"){
        tall = tall+1
        document.body.style.overflow="visible";
        document.getElementById("hamburgContainer").classList.toggle("change");
        document.getElementById("hamburgContainer").style.display="none";
        document.getElementById("container").style.display="block";
        document.getElementById("tint").style.display="none";
        document.body.overflow="visible";
        document.getElementById("navHidden").style.display="none";
    }
    else{
        document.getElementById("hamburgContainer").style.display="none";
        document.getElementById("container").style.display="block";
        document.getElementById("tint").style.display="none";
        document.body.overflow="visible";
        document.getElementById("navHidden").style.display="none";
    }
    if (window.scrollY >= 100){
        document.getElementsByClassName("navigationbar")[0].style.backgroundColor="#FFD52D";
        document.getElementsByClassName("navigationbar")[0].style.height="50px";
        document.getElementsByClassName("navigationbar")[0].style.borderBottom = "2px black outset";
        document.getElementById("bilde").style.width="50px"
        document.getElementById("bilde").style.height="50px"
        for (i = 0; i <= 4; i++){
            document.getElementsByClassName("navTag")[i].style.fontSize = "14pt";
            document.getElementsByClassName("navTag")[i].style.paddingTop = "0.8rem";
            document.getElementsByClassName("navTag")[i].style.marginRight = "100px";

        }

    }
    else{
        document.getElementsByClassName("navigationbar")[0].style.backgroundColor=null;
        document.getElementsByClassName("navigationbar")[0].style.height="100px";
        document.getElementsByClassName("navigationbar")[0].style.borderBottom = null;
        document.getElementById("bilde").style.width="100px"
        document.getElementById("bilde").style.height="100px"
        for (i = 0; i <= 4; i++){
            document.getElementsByClassName("navTag")[i].style.fontSize = "20pt";
            document.getElementsByClassName("navTag")[i].style.paddingTop = "1.5rem";
            document.getElementsByClassName("navTag")[i].style.marginRight = "40px";

        }



    }
}

function hamburgFunc(x) {
    x.classList.toggle("change");
    forandreNav();
}

function forandreNav(){
    tall = tall+1;
    if (tall %2 == 0){
        console.log("mod2");
        document.getElementById("tint").style.display="block";
        document.body.style.overflow="hidden";
        document.getElementById("tint").style.zIndex="9";
        document.getElementById("hamburgContainer").style.zIndex="10";
        document.getElementById("navHidden").style.zIndex="10";
        document.body.overflow="hidden";
        document.getElementById("navHidden").style.display="block";
    }
    else{
        console.log("mod1");
        document.getElementById("tint").style.display="none";
        document.body.style.overflow="visible";
        document.getElementById("navHidden").style.display="none";
    }
}
