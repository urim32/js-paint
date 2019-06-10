var canvas = document.getElementById('canvas');
var down = false;
var color = 'black';
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', function() {
    down = true;

    canvas.addEventListener('mousemove', draw);
});
canvas.addEventListener('mouseup', function() {
    down = false;
    removeEventListener('mousemove', draw);
});

function draw(e) {
    var y = e.clientY - this.offsetTop;
    var x = e.clientX - this.offsetLeft;
    if (down === true) {
        span = document.createElement('span');
        span.style.backgroundColor = color;
        span.style.width = size.value;
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        canvas.appendChild(span);
    }
}

function changeColor(color) {
    this.color = color;
}
var reset = document.getElementById('reset');
reset.addEventListener('click', resetFunction);
function resetFunction() {
    window.location.reload();
}

var eraser = document.getElementById('eraser');
eraser.addEventListener('click', eraserClick);
function eraserClick() {
    color = 'white';
}

var size = document.getElementById('myrange');
size.addEventListener('change', changeSize);
function changeSize() {
    span.setAttribute('width', size.value);
}
