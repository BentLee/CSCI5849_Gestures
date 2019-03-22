
var downX = 0;
var downY = 0;


$("#gestureArea").mousedown(function (event) {
    downX = event.pageX;
    downY = event.pageY;
});

$("#gestureArea").mouseup(function (event) {
    upX = event.pageX;
    upY = event.pageY;



    if (upX < downX) 
    {
        document.getElementById("swipeResult").innerHTML = "nope(swipe left)";
    } 
    else if (upX > downX) 
    {
            document.getElementById("swipeResult").innerHTML = "yup(swipe right)";
    } 
    else 
    {
            document.getElementById("swipeResult").innerHTML = "mouse up";

    }
});
