var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice"+randomNumber1+".png";
var randomImageSource=randomDiceImage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);



var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2=randomImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player 1 won👌";
}
 else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText="Player 2 won👌 ";
}
else
{
    document.querySelector("h1").innerText="Draw!";
}