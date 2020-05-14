    function mostraMaior(){
     var num1 = parseFloat(document.getElementById("num1").value);
     var num2 = parseFloat(document.getElementById("num2").value);
     var num3 = parseFloat(document.getElementById("num3").value);

     var maior = num1;

     if(num2 > maior)
      maior = num2;
     else
	 if(num3 > maior)
      maior = num3;

     alert("O maior numero é: "+maior);
    }