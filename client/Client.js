window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame   || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();


(function animloop(){
    requestAnimFrame(animloop);
    View.renderState();
})();

["click", "dblclick", "mousedown", "mouseup", "mousemove"].forEach(function(e) {
    canvas.addEventListener(e, function(m) { 
        Input.handleMouse(m, e);
    })
});

window.addEventListener("keydown", Input.handleKeydown);
window.addEventListener("keyup", Input.handleKeyup);