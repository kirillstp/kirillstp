
(function () {
    ["resize", "load"].forEach(function(evt) {window.addEventListener(evt, optimizeForMobile)});
})();

 
function optimizeForMobile(){
    let optimizeAtWidth = 650;
    let navbar_buttons = document.getElementById('navbar-buttons');
    let navbar = document.getElementById('navbar');
    let optimized = document.getElementById('dropnavbar-content')?true:false;
    let dropDownTagStart = "<button onclick=\"dropNavBarClick()\" "+
                            "class=\"dropnavbar__button navbar__text\" id=\"dropnavbar__button\">"+
                            "<i class=\"material-icons\"> dehaze </i> "+
                            window.location.pathname.replace(/\//g,'') + 
                            "</button><div class=\"dropnavbar__content\" id=\"dropnavbar-content\">";
    let dropDownTagEnd = "</div>";
    if (optimizeAtWidth > window.innerWidth ) {
        if (!optimized) {
            navbar_buttons.innerHTML = dropDownTagStart + navbar_buttons.innerHTML + dropDownTagEnd;
            navbar.style.justifyContent ="space-around";
        }
    }
    else {
        navbar_buttons.innerHTML = navbar_buttons.innerHTML.replace(dropDownTagStart,'');
        navbar_buttons.innerHTML = navbar_buttons.innerHTML.replace(dropDownTagEnd,'');

    }
}

function dropNavBarClick(){
    document.getElementById('dropnavbar-content').classList.toggle("show"); 
    for (let el of document.getElementsByClassName('navbar__button')) {
        el.classList.toggle("dropnavbar__button--borders")
    }
    
}

function dropDownOnClick() {
    console.log("Test")
}

