// Self executing function
(function() {
    ['resize', 'load'].forEach( evt => window.addEventListener(evt, waveform));
})();

function waveform(){
    url = window.location.origin + '/waveform'
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Waveform request HTTP error " + response.status);
        }
        return response.json()
    })
    .then(json => {
        console.log("Success (waveform.js)");
        render(json);
    })
    .catch(function() {
        console.log("Failure (waveform.js)");
    })
}

function render(data) {
    let block = document.getElementById('header__image');
    let width = block.clientWidth;
    let height = block.clientHeight;
    let canvas = document.getElementById('header__waveform');
    if (canvas === null) {
        canvas = document.createElement('canvas');
        canvas.id = 'header__waveform';
        canvas.width = width;
        canvas.height = height;
    }
    else {
        block.removeChild(canvas);
    }
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        // ctx.clearRect(0, 0, ctx.width, ctx.height);
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "#FF0000";
        
        for (idx in data.x) {
            let x_pix = parseInt(data.x[idx]*width);
            let y_pix = parseInt(data.y[idx]*height+0.5*height);
            console.log(x_pix,y_pix)
            // ctx.moveTo(x_pix, y_pix);
            ctx.lineTo(x_pix, y_pix);
            
            ctx.stroke();

        }
        block.appendChild(canvas);
    }
}