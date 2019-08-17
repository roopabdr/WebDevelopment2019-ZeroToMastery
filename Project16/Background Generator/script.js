var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var container = document.getElementsByClassName("container");
var body = document.body;
var colorCode = document.getElementById("colorCode");
var random = document.getElementById("random");
var color1val;
var color2val;

function setBackground(color1, color2){
    body.style.background = "linear-gradient(to right,"+color1+","+color2+")";
    displayStyle();
}

function displayStyle() {
    colorCode.textContent = body.style.background;
}

setBackground(color1.value, color2.value);

color1.addEventListener("input", function(){
    setBackground(color1.value,color2.value);
});

color2.addEventListener("input", function(){
    setBackground(color1.value,color2.value);
});

random.addEventListener("click", function(){
    color1val = '#'+Math.floor(Math.random()*16777215).toString(16);
    color2val = '#'+Math.floor(Math.random()*16777215).toString(16);

    console.log(color1val,color2val);

    setBackground(color1val,color2val);
});