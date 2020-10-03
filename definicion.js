var definicion=function(){
		var n1=document.getElementById("c1");
		var n2=document.getElementById("d1");
		var n3=document.getElementById("d2");
	
		

		console.log("hola");
		n3.className="cuadro3";
		if(n3.className=="cuadro3")
		{
			n3.className="cuadro4";
		}

		

		
	}

	var ocultar=function(){
		var n1=document.getElementById("c1");
		var n2=document.getElementById("d1");
		var n3=document.getElementById("d2");
		var n4=document.getElementById("d3");

		
		n3.className="cuadro4";
		if(n3.className=="cuadro4")
		{
			n3.className="cuadro3";
		}
}

	var operacion=function(){
		var n1=document.getElementById("d4");
		var n2=document.getElementById("b1");
		var n3=document.getElementById("b2");
		var n4=document.getElementById("b3");
		var n5=document.getElementById("b4");
		

	
		n1.className="cuadro5";
		if(n1.className=="cuadro5")
		{
			n1.className="cuadro6";
		}

	
}

	var ocultar1=function(){
		var n1=document.getElementById("d4");
		var n2=document.getElementById("b1");
		var n3=document.getElementById("b2");
		var n4=document.getElementById("b3");
		var n5=document.getElementById("b4");
	
		n1.className="cuadro6";
		if(n1.className=="cuadro6")
		{
			n1.className="cuadro5";
		}
}

var resultado=function(){
		var n2=document.getElementById("b1").value;
		var n3=document.getElementById("b2").value;
		var n4=document.getElementById("b3").value;
		console.log(n2);
		console.log(n3);
		console.log(n4);

			 suma = parseInt(n2) + parseInt(n3) - parseInt(n4);
  alert("La Operacion tiene como resultado: "+suma);

}
