var $reveal = $(".img-pos");
$reveal.draggable({
    scroll: true,
    containment: "#container",
    snap: '.gridlines',
    stop: function () {
        var l = (100 * parseFloat($(this).position().left / parseFloat($(this).parent().width()))) + "%";
        var t = (100 * parseFloat($(this).position().top / parseFloat($(this).parent().height()))) + "%";
        $(this).css("left", l);
        $(this).css("top", t);
    }
});