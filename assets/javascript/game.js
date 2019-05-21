var currentTarget
var wins = 0;
var losses = 0;
var gems = ["redGem", "blueGem", "yellowGem", "greenGem"];
var gemVal
var currentScore

function gameStart() {
    target = Math.floor(Math.random() * 50 + 30);
    console.log(target);
    currentScore = 0;
    $("#Score").html(currentScore);

    for (i = 0; i < gems.length; i++) {
        var gemBtn = $("<button>");
        gemBtn.addClass("gem-button gem");
        gemVal = Math.floor(Math.random() * 11 + 1);
        
    }
}

$(".gem-button").on("click", function() {
    currentScore = currentScore + gemVal;
    $("#Score").html(currentScore);
})

if (currentScore === currentTarget) {
    wins++;
    $("#winDisplay").html("Wins: " + wins);
    gameStart();
    alert("You Win!");
}

if (currentScore > currentTarget) {
    losses++;
    $("#lossDisplay").html("Losses: " + losses);
    gameStart();
    alert("You Lose");
}