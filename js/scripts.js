function generateRandom() {
    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomText = "";
    for (let i = 0; i < 4; i++) {
      randomText += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    let userinput = document.getElementById("userinput");
    userinput.value = randomText;

    handleInput();
  }

function startGame(){
    var startbtn = document.getElementById("start-btn");
    startbtn.style.display = "none";
    var solutionbtn = document.getElementById("solution-btn");
    solutionbtn.style.display = "block";

    
    fillGrid();

} 

function fillGrid(){

    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let input = document.getElementById("userinput").value;
    var l0 = letters.indexOf(input.charAt(0));
    var l1 = letters.indexOf(input.charAt(1));
    var l2 = letters.indexOf(input.charAt(2));
    var l3 = letters.indexOf(input.charAt(3));
    var prequizid = (((((l0*36)+l1)*36)+l2)*36)+l3;
    var quizid = prequizid % 595681;

    
    fetch("statics/equations.txt")
    .then(response => response.text())
    .then(text => {
        var lines = text.split("\n");
        var quizcontent = lines[quizid];

        //alert(quizcontent)
        
        var o11 = document.getElementById("o11");
        o11.innerHTML = quizcontent.charAt(0);
        
        var o21 = document.getElementById("o21");
        o21.innerHTML = quizcontent.charAt(1);
        
        var o22 = document.getElementById("o22");
        o22.innerHTML = quizcontent.charAt(2);
        
        var o23 = document.getElementById("o23");
        o23.innerHTML = quizcontent.charAt(3);
        
        var o31 = document.getElementById("o31");
        o31.innerHTML = quizcontent.charAt(4);
        
        var o51 = document.getElementById("o51");
        o51.innerHTML = quizcontent.charAt(5);

        const mySwitch = document.getElementById("boolflags");
        if (mySwitch.checked) {


            var elemtens = document.getElementsByClassName("img-var");
            for (var i = 0; i < elemtens.length; i++) {
              if (elemtens[i].classList.contains("img-var-letter")) {
                elemtens[i].classList.remove("img-var-letter");
                elemtens[i].classList.add("img-var-flag");
              } else if (elemtens[i].classList.contains("img-var")) {
                elemtens[i].classList.add("img-var-flag");
              }
            }


            var v111 = document.getElementById("v111");
            v111.src = "statics/f"+quizcontent.charAt(6)+".png";
            
            var v112 = document.getElementById("v112");
            v112.src = "statics/f"+quizcontent.charAt(7)+".png";
            
            var v12 = document.getElementById("v12");
            v12.src = "statics/f"+quizcontent.charAt(8)+".png";
            
            var v131 = document.getElementById("v131");
            v131.src = "statics/f"+quizcontent.charAt(9)+".png";
            
            var v132 = document.getElementById("v132");
            v132.src = "statics/f"+quizcontent.charAt(10)+".png";
            
            var v21 = document.getElementById("v21");
            v21.src = "statics/f"+quizcontent.charAt(11)+".png";
            
            var v22 = document.getElementById("v22");
            v22.src = "statics/f"+quizcontent.charAt(12)+".png";
            
            var v23 = document.getElementById("v23");
            v23.src = "statics/f"+quizcontent.charAt(13)+".png";
            
            var v311 = document.getElementById("v311");
            v311.src = "statics/f"+quizcontent.charAt(14)+".png";
            
            var v312 = document.getElementById("v312");
            v312.src = "statics/f"+quizcontent.charAt(15)+".png";

            var v32 = document.getElementById("v32");
            v32.src = "statics/f"+quizcontent.charAt(16)+".png";
            
            var v331 = document.getElementById("v331");
            v331.src = "statics/f"+quizcontent.charAt(17)+".png";
            
            var v332 = document.getElementById("v332");
            v332.src = "statics/f"+quizcontent.charAt(18)+".png";
        
        } 
        else {

            var elemtens = document.getElementsByClassName("img-var");
            for (var i = 0; i < elemtens.length; i++) {
              if (elemtens[i].classList.contains("img-var-flag")) {
                elemtens[i].classList.remove("img-var-flag");
                elemtens[i].classList.add("img-var-letter");
              } else if (elemtens[i].classList.contains("img-var")) {
                elemtens[i].classList.add("img-var-letter");
              }
            }
            var v111 = document.getElementById("v111");
            v111.src = "statics/"+quizcontent.charAt(6)+".png";
            
            var v112 = document.getElementById("v112");
            v112.src = "statics/"+quizcontent.charAt(7)+".png";
            
            var v12 = document.getElementById("v12");
            v12.src = "statics/"+quizcontent.charAt(8)+".png";
            
            var v131 = document.getElementById("v131");
            v131.src = "statics/"+quizcontent.charAt(9)+".png";
            
            var v132 = document.getElementById("v132");
            v132.src = "statics/"+quizcontent.charAt(10)+".png";
            
            var v21 = document.getElementById("v21");
            v21.src = "statics/"+quizcontent.charAt(11)+".png";
            
            var v22 = document.getElementById("v22");
            v22.src = "statics/"+quizcontent.charAt(12)+".png";
            
            var v23 = document.getElementById("v23");
            v23.src = "statics/"+quizcontent.charAt(13)+".png";
            
            var v311 = document.getElementById("v311");
            v311.src = "statics/"+quizcontent.charAt(14)+".png";
            
            var v312 = document.getElementById("v312");
            v312.src = "statics/"+quizcontent.charAt(15)+".png";

            var v32 = document.getElementById("v32");
            v32.src = "statics/"+quizcontent.charAt(16)+".png";
            
            var v331 = document.getElementById("v331");
            v331.src = "statics/"+quizcontent.charAt(17)+".png";
            
            var v332 = document.getElementById("v332");
            v332.src = "statics/"+quizcontent.charAt(18)+".png";
        
        }

  })
}

function showSolution(){
    var solutionbtn = document.getElementById("solution-btn");
    solutionbtn.style.display = "none";
    var generatebtn = document.getElementById("generate-btn");
    generatebtn.style.display = "block";

    

} 
  
  function handleInput() {
    let input = document.getElementById("userinput").value;
    if (input.length === 4) {
      var generatebtn = document.getElementById("generate-btn");
      generatebtn.style.display = "none";
      var startbtn = document.getElementById("start-btn");
      startbtn.style.display = "block";
    }
    else{
        var generatebtn = document.getElementById("generate-btn");
        generatebtn.style.display = "block";
        var startbtn = document.getElementById("start-btn");
        startbtn.style.display = "none";
        var solutionbtn = document.getElementById("solution-btn");
        solutionbtn.style.display = "none";
    }
  }
  
  document.getElementById("userinput").addEventListener("input", handleInput);