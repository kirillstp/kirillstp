
// Self executing function
(function() {
    ['resize', 'load'].forEach( evt => window.addEventListener(evt, onSize));
    function onSize() {
        console.log(document.body.clientWidth);
    }
})();

