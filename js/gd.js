var box = document.getElementById("box");
    var con1 = document.getElementById("con1");
    var con2 = document.getElementById("con2");
    var s = document.getElementsByClassName("gd");
    var speed = 50;
    con2.innerHTML = con1.innerHTML;
    function ScrollUp() {
        if (box.scrollTop >= con1.scrollHeight) {
            box.scrollTop = 0;
        } else
            box.scrollTop++;
    }
    var i = setInterval("ScrollUp()", speed);
    function Stop() {
        clearInterval(i);
    }
    function Up() {
        i = setInterval("ScrollUp()", speed);
    }
