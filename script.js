let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", function() {
    const guess = Number(document.getElementById("guess").value);
    attempts++;

    const resultDiv = document.getElementById("result");

    if (guess === randomNumber) {
        resultDiv.innerHTML = `Баяр хүргэе! Та зөв тоог - ${randomNumber}, ${attempts} оролдлогонд таав!`;
        document.getElementById("playAgain").style.display = "inline";
    } else if (guess < randomNumber) {
        resultDiv.innerHTML = "Хэт бага байна, дахин оролдоно уу.";
    } else if (guess > randomNumber) {
        resultDiv.innerHTML = "Хэт их байна, дахин оролдоно уу.";
    }

    document.getElementById("guess").value = '';
});

document.getElementById("playAgain").addEventListener("click", function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("result").innerHTML = '';
    this.style.display = "none";
});
