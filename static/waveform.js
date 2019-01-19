// Self executing function
(function() {
    window.addEventListener('load', waveform);
    window.addEventListener('resize', waveform);
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
    let height = 0.1* document.documentElement.clientHeight;
    console.log(width)
    let canvas = document.getElementById('header__waveform');
    if (canvas !== null) {
        block.removeChild(canvas);
    }
    canvas = document.createElement('canvas');
    canvas.id = 'header__waveform';
    canvas.width = width;
    canvas.height = 1*height;
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#81858c";
        // ctx.moveTo(x_pix, y_pix);
        ctx.imageSmoothingEnabled = true;
        for (idx in data.x) {
            
            let x_pix = data.x[idx]*width;
            let y_pix = 0.3*data.y[idx]*height+0.5*height;
            ctx.lineTo(x_pix, y_pix);
            ctx.stroke();
        }
        block.appendChild(canvas);
    }
}