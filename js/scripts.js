let quizcontent

function generateRandom() {
    let letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomText = "";
    for (let i = 0; i < 4; i++) {
      randomText += letters.charAt(Math.floor(Math.random() * letters.length));
    }


    document.getElementById("userinput").readOnly = false;
    

    let userinput = document.getElementById("userinput");
    userinput.value = randomText;

    document.getElementById("v111").src = "statics/white.png"
    document.getElementById("v112").src = "statics/white.png"
    document.getElementById("v12").src = "statics/white.png"
    document.getElementById("v131").src = "statics/white.png"
    document.getElementById("v132").src = "statics/white.png"
    document.getElementById("v21").src = "statics/white.png"
    document.getElementById("v22").src = "statics/white.png"
    document.getElementById("v23").src = "statics/white.png"
    document.getElementById("v311").src = "statics/white.png"
    document.getElementById("v312").src = "statics/white.png"
    document.getElementById("v32").src = "statics/white.png"
    document.getElementById("v331").src = "statics/white.png"
    document.getElementById("v332").src = "statics/white.png"

    document.getElementById("o11").innerHTML = ""
    document.getElementById("o21").innerHTML = ""
    document.getElementById("o22").innerHTML = ""
    document.getElementById("o23").innerHTML = ""
    document.getElementById("o31").innerHTML = ""
    document.getElementById("o51").innerHTML = ""

    var quizgrid = document.getElementById("quizgrid")
    quizgrid.style.display = "grid"
    var solutiongrid = document.getElementById("solutiongrid")
    solutiongrid.style.display = "none"
    

    handleInput();
  }

function startGame(){
    var startbtn = document.getElementById("start-btn");
    startbtn.style.display = "none";
    var solutionbtn = document.getElementById("solution-btn");
    solutionbtn.style.display = "block";

    document.getElementById("userinput").readOnly = true;

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
        quizcontent = lines[quizid];

        //alert(quizcontent)
        
        document.getElementById("o11").innerHTML = quizcontent.charAt(0);
        
        document.getElementById("o21").innerHTML = quizcontent.charAt(1);
        
        document.getElementById("o22").innerHTML = quizcontent.charAt(2);
        
        document.getElementById("o23").innerHTML = quizcontent.charAt(3);
        
        document.getElementById("o31").innerHTML = quizcontent.charAt(4);
        
        document.getElementById("o51").innerHTML = quizcontent.charAt(5);

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


            document.getElementById("v111").src = "statics/f"+quizcontent.charAt(6)+".png";           
            document.getElementById("v112").src = "statics/f"+quizcontent.charAt(7)+".png";            
            document.getElementById("v12").src = "statics/f"+quizcontent.charAt(8)+".png";            
            document.getElementById("v131").src = "statics/f"+quizcontent.charAt(9)+".png";            
            document.getElementById("v132").src = "statics/f"+quizcontent.charAt(10)+".png";           
            document.getElementById("v21").src = "statics/f"+quizcontent.charAt(11)+".png";            
            document.getElementById("v22").src = "statics/f"+quizcontent.charAt(12)+".png";            
            document.getElementById("v23").src = "statics/f"+quizcontent.charAt(13)+".png";           
            document.getElementById("v311").src = "statics/f"+quizcontent.charAt(14)+".png";            
            document.getElementById("v312").src = "statics/f"+quizcontent.charAt(15)+".png";
            document.getElementById("v32").src = "statics/f"+quizcontent.charAt(16)+".png";            
            document.getElementById("v331").src = "statics/f"+quizcontent.charAt(17)+".png";
            document.getElementById("v332").src = "statics/f"+quizcontent.charAt(18)+".png";
            
            //solutions
            document.getElementById("sol-a-i").src="statics/fa.png";
            document.getElementById("sol-b-i").src="statics/fb.png";
            document.getElementById("sol-c-i").src="statics/fc.png";
            document.getElementById("sol-d-i").src="statics/fd.png";
            document.getElementById("sol-e-i").src="statics/fe.png";
            document.getElementById("sol-f-i").src="statics/ff.png";
            document.getElementById("sol-g-i").src="statics/fg.png";
            document.getElementById("sol-h-i").src="statics/fh.png";
            document.getElementById("sol-i-i").src="statics/fi.png";

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

            document.getElementById("v111").src = "statics/"+quizcontent.charAt(6)+".png";
            document.getElementById("v112").src = "statics/"+quizcontent.charAt(7)+".png";
            document.getElementById("v12").src = "statics/"+quizcontent.charAt(8)+".png";
            document.getElementById("v131").src = "statics/"+quizcontent.charAt(9)+".png";
            document.getElementById("v132").src = "statics/"+quizcontent.charAt(10)+".png";
            document.getElementById("v21").src = "statics/"+quizcontent.charAt(11)+".png";
            document.getElementById("v22").src = "statics/"+quizcontent.charAt(12)+".png";
            document.getElementById("v23").src = "statics/"+quizcontent.charAt(13)+".png";
            document.getElementById("v311").src = "statics/"+quizcontent.charAt(14)+".png";
            document.getElementById("v312").src = "statics/"+quizcontent.charAt(15)+".png";
            document.getElementById("v32").src = "statics/"+quizcontent.charAt(16)+".png";
            document.getElementById("v331").src = "statics/"+quizcontent.charAt(17)+".png";
            document.getElementById("v332").src = "statics/"+quizcontent.charAt(18)+".png";
        
            //solutions
            document.getElementById("sol-a-i").src="statics/a.png";
            document.getElementById("sol-b-i").src="statics/b.png";
            document.getElementById("sol-c-i").src="statics/c.png";
            document.getElementById("sol-d-i").src="statics/d.png";
            document.getElementById("sol-e-i").src="statics/e.png";
            document.getElementById("sol-f-i").src="statics/f.png";
            document.getElementById("sol-g-i").src="statics/g.png";
            document.getElementById("sol-h-i").src="statics/h.png";
            document.getElementById("sol-i-i").src="statics/i.png";
        }
      

      //solutions
      if (quizcontent.indexOf("a") >= 0){  document.getElementById("sol-a-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("a")+13)}
      else{document.getElementById("sol-a-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("b") >= 0){  document.getElementById("sol-b-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("b")+13)}
      else{document.getElementById("sol-b-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("c") >= 0){  document.getElementById("sol-c-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("c")+13)}
      else{document.getElementById("sol-c-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("d") >= 0){  document.getElementById("sol-d-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("d")+13)}
      else{document.getElementById("sol-d-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("e") >= 0){  document.getElementById("sol-e-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("e")+13)}
      else{document.getElementById("sol-e-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("f") >= 0){  document.getElementById("sol-f-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("f")+13)}
      else{document.getElementById("sol-f-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("g") >= 0){  document.getElementById("sol-g-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("g")+13)}
      else{document.getElementById("sol-g-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("h") >= 0){  document.getElementById("sol-h-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("h")+13)}
      else{document.getElementById("sol-h-v").innerHTML= ": NaN"}
      if (quizcontent.indexOf("i") >= 0){  document.getElementById("sol-i-v").innerHTML= ": "+quizcontent.charAt(quizcontent.indexOf("i")+13)}
      else{document.getElementById("sol-i-v").innerHTML= ": NaN"}
      

  })
}

function showSolution(){
    var solutionbtn = document.getElementById("solution-btn");
    solutionbtn.style.display = "none";
    var generatebtn = document.getElementById("generate-btn");
    generatebtn.style.display = "block";

    document.getElementById("userinput").readOnly = false;

    var quizgrid = document.getElementById("quizgrid")
    quizgrid.style.display = "none"
    var solutiongrid = document.getElementById("solutiongrid")
    solutiongrid.style.display = "grid"


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