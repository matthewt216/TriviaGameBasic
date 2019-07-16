$("#pack1").hide();
$("#pack2").hide();
$("#pack3").hide();
$("#timer").hide();
$("#message").hide();
$("#submit").hide();
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var corr1 = false;
var corr2 = false;
var corr3 = false;
var inco1 = false;
var inco2 = false;
var inco3 = false;
var c1 = false;
var c2 = false;
var c3 = false;
var intervalId;
var time = 3;
$("#button").on("click", function(){
    $("#pack1").show();
    $("#pack2").show();
    $("#pack3").show();
    $("#button").hide();
    $("#timer").show();
    $("#submit").show();
    intervalId = setInterval(count, 1000);
});
$("#ans1").on("click", function(){
    if ((c1 === false || c1 === true) && inco1 === false){
        incorrect++;
    }
    if (corr1 === true && correct > 0){
        correct--;
        corr1 = false;
    }
    c1 = true;
    inco1 = true;
});
$("#ans2").on("click", function(){
    if ((c1 === false || c1 === true) && inco1 === false){
        incorrect++;
    }
    if (corr1 === true && correct > 0){
        correct--;
        corr1 = false;
    }
    c1 = true;
    inco1 = true;
});
$("#ans3").on("click", function(){
    if ((c1 === false || c1 === true) && inco1 === false){
        incorrect++;
    }
    if (corr1 === true && correct > 0){
        correct--;
        corr1 = false;
    }
    c1 = true;
    inco1 = true;
});
$("#ans4").on("click", function(){
    corr1 = true;
    inco1 = false;
    if (c1 === false && corr1 === true){
        correct++;
    }
    if (c1 === true && incorrect > 0){
        incorrect--;
        correct++;
    }
    c1 = true;
});
$("#ans5").on("click", function(){
    if ((c2 === false || c2 === true) && inco2 === false){
        incorrect++;
    }
    if (corr2 === true && correct > 0){
        correct--;
        corr2 = false;
    }
    c2 = true;
    inco2 = true;
});
$("#ans6").on("click", function(){
    corr2 = true;
    inco2 = false;
    if (c2 === false && corr2 === true){
        correct++;
    }
    if (c2 === true && incorrect > 0){
        incorrect--;
        correct++;
    }
    c2 = true;
});
$("#ans7").on("click", function(){
    if ((c2 === false || c2 === true) && inco2 === false){
        incorrect++;
    }
    if (corr2 === true && correct > 0){
        correct--;
        corr2 = false;
    }
    c2 = true;
    inco2 = true;
});
$("#ans8").on("click", function(){
    if ((c2 === false || c2 === true) && inco2 === false){
        incorrect++;
    }
    if (corr2 === true && correct > 0){
        correct--;
        corr2 = false;
    }
    c2 = true;
    inco2 = true;
});
$("#ans9").on("click", function(){
    if ((c3 === false || c3 === true) && inco3 === false){
        incorrect++;
    }
    if (corr3 === true && correct > 0){
        correct--;
        corr3 = false;
    }
    c3 = true;
    inco3 = true;
});
$("#ans10").on("click", function(){
    if ((c3 === false || c3 === true) && inco3 === false){
        incorrect++;
    }
    if (corr3 === true && correct > 0){
        correct--;
        corr3 = false;
    }
    c3 = true;
    inco3 = true;
});
$("#ans11").on("click", function(){
    corr3 = true;
    inco3 = false;
    if (c3 === false && corr3 === true){
        correct++;
    }
    if (c3 === true && incorrect > 0){
        incorrect--;
        correct++;
    }
    c3 = true;
});
$("#ans12").on("click", function(){
    if ((c3 === false || c3 === true) && inco3 === false){
        incorrect++;
    }
    if (corr3 === true && correct > 0){
        correct--;
        corr3 = false;
    }
    c3 = true;
    inco3 = true;
});
$("#submit").on("click", function(){
    if (c1 === false){
        unanswered++;
    }
    if (c2 === false){
        unanswered++;
    };
    if (c3 === false){
        unanswered++;
    };
    $("#message").show();
    $("#message").html("Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered);
    $("#pack1").hide();
    $("#pack2").hide();
    $("#pack3").hide();
    $("#submit").hide();
});
function count(){
    if (time > 0){
        time--;
        $("#timer").text("Time Remaining: " + time + " seconds");
    }
    else if (time === 0){
        $("#message").show();
        if (c1 === false){
            unanswered++;
        }
        if (c2 === false){
            unanswered++;
        };
        if (c3 === false){
            unanswered++;
        };
        $("#message").html("Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered); 
        $("#pack1").hide();
        $("#pack2").hide();
        $("#pack3").hide();
        $("#submit").hide();
        time--;
    }
}