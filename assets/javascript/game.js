var currentTarget
var wins = 0;
var losses = 0;
var gems = ["./assets/images/redGem.png", "./assets/images/blueGem.png", "./assets/images/yellowGem.png", "./assets/images/greenGem.png"];
var gemVal
var currentScore

//Resets game. initializes global values that are used in my "on click" function.

function gameStart() {
    currentTarget = Math.floor(Math.random() * 101) + 19;
    console.log(target);
    currentScore = 0;
    $("#Score").html(currentScore);
    $("#target").html(currentTarget);
    $("#winDisplay").html("Wins: " + wins);
    $("#lossDisplay").html("Losses: " + losses);

}

// creates dynamic image tags for each of the four gems and inserts them into divs

for (i = 0; i < gems.length; i++) {
    // creates dynamic image tags
    var gemImg = $("<img>");
    gemVal = Math.floor(Math.random() * 11) + 1;
    // generated numbers are stored in gemVal
    gemImg.attr("data-gemVal", gemVal);
    // accesses gems array (array with relative path images) and attaches them to "src" attribute
    gemImg.attr("src", gems[i]);
    // adds a dynamic lass to "gemImg" that allows us to run onClick functions with them.
    gemImg.addClass("gemImage");
    $(".gemsDiv").append(gemImg);
}

// calls gamestart before game functions to initialize global variables
gameStart();

$(".gemImage").on("click", function () {
    console.log($(this).attr("data-gemVal"));
    // adds the generated values attached to each click to the "currentScore" variable
    currentScore = currentScore + parseInt($(this).attr("data-gemVal"));
    $("#Score").html(currentScore);
    // runs the function "getStatus" to check whether a win or loss condition has been met
    getStatus();
})

function getStatus() {
    // checks to see if the player's score is equal to the target score
    if (currentScore === currentTarget) {
        // adds a win to "wins" and displays wins on screen
        wins++;
        $("#winDisplay").html("Wins: " + wins);
        // resets gamestate after a win
        gameStart();
        alert("You Win!");
    }

    // checks to see if the player's score has gone over the target score
    if (currentScore > currentTarget) {
        // adds a loss to the "losses" and displays on screen
        losses++;
        $("#lossDisplay").html("Losses: " + losses);
        // resets gamestate after a loss
        gameStart();
        alert("You Lose");
    }
}