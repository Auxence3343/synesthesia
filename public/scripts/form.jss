    var sliderQ = document.getElementById("customRange1");
    var outputQ = document.getElementById("demoQ");
    outputQ.innerHTML = sliderQ.value;

    var sliderW = document.getElementById("customRange2");
    var outputW = document.getElementById("demoW");
    outputW.innerHTML = sliderW.value;

    var sliderC = document.getElementById("customRange3");
    var outputC = document.getElementById("demoC");
    outputC.innerHTML = sliderC.value;
    
    slider.value = function() {
      outputQ.innerHTML = this.value;
      outputW.innerHTML = this.value;
      outputC.innerHTML = this.value;
    }