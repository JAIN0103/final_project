///let tries = 0;

//function checkTriesAndRun() {
    //if (tries != -3){
    //    RunReactionTest();
    //}
    //else {
        //$.ajax({
          //  type: "POST",
            //url: "/reaction",
           // data: {"hello"},
            //dataType: "json",
        // //   success: function(data) { alert('all ok');}
         //}//);
   // }
//}




function RunReactionTest()  {
    //startGame(getRIntInRng(20, 50), getRIntInRng(20, 50), "blue", getRIntInRng(0, x_size - 10), getRIntInRng(0, y_size - 10));
    //setTimeout( function() { updateGameArea(); }, getRIntInRng(3000, 10000));
        // Alternative
    startGame(false);
    setTimeout( function() { changeCanvasColor("red"); }, getRIntInRng(3000, 10000));


    //the code below is really disgusting and has to be rewritten
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
        }

        // switch is not good for one case!!!
        switch (event.key) {
        // want to use something different to ArrowDown
        case "ArrowDown":
            end_time = performance.now();
            var diff_time = end_time - start_time ; //in ms
            if (isNaN(start_time)){
                document.getElementById("timer").innerHTML= "You pressed to early!";
            }
            else
            {
                document.getElementById("timer").innerHTML= "Time: " + diff_time;
                //tries++;
            }

            // I only used clear for debuggin purposes, we do not want i here
            // myGameArea.clear();
            break;
        default:
            return; // Quit when this doesn't handle the key event.
        }

        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
    }, true);
}