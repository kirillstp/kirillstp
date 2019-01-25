
(function () {
    ["resize", "load"].forEach(function(evt) {window.addEventListener(evt, optimizeForMobile)});
})();

 
function optimizeForMobile(){
    let optimizeAtWidth = 650;
    let navbar_buttons = document.getElementById('navbar-buttons');
    let navbar = document.getElementById('navbar');
    let optimized = document.getElementById('dropnavbar-content')?true:false;
    let dropDownTagStart = "<button class=\"dropnavbar__button navbar__button navbar__text\"> <i class=\"material-icons\"> dehaze </i> "+
                            window.location.pathname.replace(/\//g,'') + 
                            "</button><div class=\"dropnavbar__content\" id=\"dropnavbar-content\">";
    let dropDownTagEnd = "</div>";
    if (optimizeAtWidth > window.innerWidth ) {
        if (!optimized) {
            navbar_buttons.innerHTML = dropDownTagStart + navbar_buttons.innerHTML + dropDownTagEnd
            navbar.style.justifyContent ="flex-start"
        }
    }
    else {
        navbar_buttons.innerHTML = navbar_buttons.innerHTML.replace(dropDownTagStart,'');
        navbar_buttons.innerHTML = navbar.innerHTML.replace(dropDownTagEnd,'');

    }
}

