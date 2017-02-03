const name = "Kalle";
const number = Math.floor((Math.random() * 10) +1 );
let input = 1;
let money = 100;

let bettingMoney = (userInput) =>
{
    if(userInput = null) {
        userInput = prompt("how much money would you like to bet in euros?");
    }
    else if (userInput != null)
    {
        userInput = prompt("how much money would you like to bet in euros?", userInput);
    }
    console.log("userinput = " + userInput);
    userInput = Number.parseInt(userInput);
    if(isNaN(userInput) || userInput < 5 || userInput > 10){
        alert("The input is not correct, please fill in a valid number between 5 and 10");
        inputBettingMoney();
    }
    else {
        money = money - userInput;
        alert("you now have " + money + " euros left");
        return userInput
    }
};

let inputBettingMoney = () => {
    input = bettingMoney(input);
};

let slot = (number, input) => {

    let luckyMultiplier = number / 7;
    let inputMultiplier = input / 7;
    let multiplier = luckyMultiplier + inputMultiplier;
    let winnings = Math.floor((Math.random() * 10) * multiplier + 1);
    money = money + winnings;
    alert("Congratulations! You just won " + winnings + " euros! you now have " + money + " euros")
    if (confirm("Would you like to continue playing") == true)
    {
        inputBettingMoney();
    }
    else{
        alert("We hope to see you again!")
    }

};

inputBettingMoney();
slot(number, input);