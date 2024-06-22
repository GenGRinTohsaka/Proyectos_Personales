

//Esta funcion lo que hace es hacer una alerta de hola papus
function Papus(){
    alert("Hola papus");
}
//Esta funcion me va a permitir cambiar el valor de un label mediante un imput del usuario
function PruebaValorLabel(){
    let miVariable = "Hola Mundo";
    let labelElement = document.getElementById("valorLabel");
    let valorIngresado = document.getElementById("miImput").value;
    labelElement.style.display = "inline-block";
    labelElement.textContent = "Valor: " + valorIngresado;
    
}

function suma(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Convertir los valores a números (si es necesario)
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // Realizar la suma
    let resultado = num1 + num2;
    // Mostrar el resultado en el label de html
    let labelElement = document.getElementById("valorLabel");
    labelElement.textContent = "Suma: " + resultado;
    
}


