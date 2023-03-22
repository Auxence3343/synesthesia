var sliderQ = document.getElementById("Quality");
var outputQ = document.getElementById("QualityD");
outputQ.innerHTML = sliderQ.value * 2;
    
console.log("test");
var sliderW = document.getElementById("Accuracy");
var outputW = document.getElementById("AccuracyD");
outputW.innerHTML = sliderW.value * 2;
    
var sliderC = document.getElementById("Quickness");
var outputC = document.getElementById("QuicknessD");
outputC.innerHTML = sliderC.value * 2;
                
function sliderValue() {
    outputQ.innerHTML = sliderQ.value * 2;
    outputW.innerHTML = sliderW.value * 2;
    outputC.innerHTML = sliderC.value * 2;
}

