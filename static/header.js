(function() {
    window.addEventListener('load', render);
    window.addEventListener('resize', render);
})();

function render(data) {
    let block = document.getElementById('header');
    let width = document.documentElement.clientWidth;
    let height = 0.15*document.documentElement.clientHeight;
    let canvas = document.getElementById('header__canvas');
    if (canvas !== null) {
        block.removeChild(canvas);
    }
    canvas = document.createElement('canvas');
    canvas.id = 'header__canvas';
    canvas.width = width;
    canvas.height = height;
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        _drawTitle(ctx, canvas.height, canvas.width);
        block.appendChild(canvas);
    }
}

function _drawTitle(ctx, height, width) {
    let title_font_size = 50;
    let subtitle_font_size = 20;
    ctx.font = "700 " + title_font_size + "px Arvo";
    ctx.fillStyle = 'black';
    ctx.fillText("Kirill Stepanov", width/10 , height/2);
    ctx.font = "700 " + subtitle_font_size + "px Arvo";
    ctx.fillStyle = 'grey';
    ctx.fillText("Software Developer", width/10, height/2 + 0.4*title_font_size);
}