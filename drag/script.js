document.onselectstart = function (e) {
    e.preventDefault();
    return false;
}
var slider = document.getElementById('img-1'), container = document.getElementById('container');

document.mouseState = 'up';
slider.mouseState = 'up';
slider.lastMousePosY = null;
slider.lastMousePosX = null;
slider.proposedNewPosY = parseInt(slider.style.top, 10); //converts '10px' to 10
slider.proposedNewPosX = parseInt(slider.style.left, 10);

slider.style.top = '0';
slider.style.left = '0';
slider.style.height = '50px';
slider.style.width = '50px';

container.style.top = '0';
container.style.left = '0';
// container.style.height = '100vh';
// container.style.width = '600px';
document.onmousedown = function () {
    document.mouseState = 'down';
};

document.onmouseup = function () {
    document.mouseState = 'up';
    slider.mouseState = 'up';
};
slider.onmousedown = function (e) {
    slider.lastMousePosY = e.pageY;
    slider.lastMousePosX = e.pageX;
    slider.mouseState = 'down';
    document.mouseState = 'down';
};

slider.onmouseup = function (e) {
    slider.mouseState = 'up';
    document.mouseState = 'up';
};
var getAtInt = function getAtInt(obj, attrib) {
    return parseInt(obj.style[attrib], 10);
};

document.onmousemove = function (e) {
    if ((document.mouseState === 'down') && (slider.mouseState === 'down')) {
        slider.proposedNewPosY = getAtInt(slider, 'top') + e.pageY - slider.lastMousePosY;
        slider.proposedNewPosX = getAtInt(slider, 'left') + e.pageX - slider.lastMousePosX;

        if (slider.proposedNewPosY < getAtInt(container, 'top')) {
            slider.style.top = container.style.top;
        } else if (slider.proposedNewPosY > getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(slider, 'height')) {
            slider.style.top = getAtInt(container, 'top') + getAtInt(container, 'height') - getAtInt(slider, 'height') + '%';
        } else {
            slider.style.top = slider.proposedNewPosY + '%';
        }
        if (slider.proposedNewPosX < getAtInt(container, 'left')) {
            slider.style.left = container.style.left;
        } else if (slider.proposedNewPosX > getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(slider, 'width')) {
            slider.style.left = getAtInt(container, 'left') + getAtInt(container, 'width') - getAtInt(slider, 'width') + '%';
        } else {
            slider.style.left = slider.proposedNewPosX + '%';
        }
        slider.lastMousePosY = e.pageY;
        slider.lastMousePosX = e.pageX;
    }
};