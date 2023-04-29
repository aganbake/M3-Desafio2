const factorial = (numero) => {
  //
  if (numero < 0) {
    numero = numero * -1;
  }
  if (numero <= 0) {
    return 1;
  }
  let factorial = 1;
  while (numero > 1) {
    factorial = factorial * numero;
    numero--;
  }
  return factorial;
};

function call() {
  let option = parseInt(document.getElementById("numero").value);

  if (isNaN(option)) {
    //función isNan, nos verifica que sea un número (Not A Number)
    alert("No es un número");
  } else if (option > 20) {
    alert("Número fuera de rango");
  } else {
    for (let i = 1; i <= option; i++) {
      //El for inicia en 1, para no tener una multiplicación por 0, pero option se cambia a menor igual
      let table = document.getElementById("table"); //Nos traemos la tabla creada
      let newTr = document.createElement("tr"); //Creamos una fila
      table.appendChild(newTr); //Le añadimos la fila a la tabla

      let newTh = document.createElement("th"); //Creamos una cabecera
      newTr.appendChild(newTh); //Le añadimos la cabecera a la fila

      let newTd = document.createElement("td"); //Creamos dato
      newTr.appendChild(newTd); //le añadimos el dato a la fila

      newTh.innerHTML = `${option} x ${i} = ${i * option}`; //A la cabecera, le añadimos el calculo de la multiplicación
      newTd.innerHTML = `Factorial de ${i} es ${factorial(i)}`; //Al dato le mandamos el factorial, creado en una función anonima
    }
  }
  document.getElementById("button").disabled = true; //Deshabilitamos el botón, solo para no tener repetidos los datos
  document.getElementById("button2").removeAttribute("hidden"); //Mostramos un botón secreto para empezar de nuevo
}

function button() {
  let nombre = document.getElementById("nombre").value;
  let asunto = document.getElementById("asunto").value;
  let comment = document.getElementById("comment").value;

  if (
    /[a-zA-Z]/.test(nombre) &&
    /[a-zA-Z]/.test(asunto) &&
    /[a-zA-Z]/.test(comment)
  ) {
    document.getElementById("aviso").innerHTML = "Mensaje enviado con éxito!!";
    document.getElementById("aviso").style.color = "green";
  }

  if (!/[a-zA-Z]/.test(nombre)) {
    document.getElementById("error-nombre").innerHTML = "Nombre es Requerido";
  } else {
    document.getElementById("error-nombre").innerHTML = " ";
  }
  if (!/[a-zA-Z]/.test(asunto)) {
    document.getElementById("error-asunto").innerHTML = "Asunto es Requerido";
  } else {
    document.getElementById("error-asunto").innerHTML = " ";
  }
  if (!/[a-zA-Z]/.test(comment)) {
    document.getElementById("error-comment").innerHTML =
      "Comment es Requerido!";
  } else {
    document.getElementById("error-comment").innerHTML = " ";
  }
}

function again() {
  window.location.href = "index.html"; //devolvemos al inicio
}

function colores() {
  let colorUno = document.getElementById("uno");

  colorUno.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "darkred";
  });

  let colorDos = document.getElementById("dos");

  colorDos.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "orange";
  });

  let colorTres = document.getElementById("tres");

  colorTres.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "yellow";
  });

  let colorCuatro = document.getElementById("cuatro");

  colorCuatro.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "green";
  });

  let colorCinco = document.getElementById("cinco");

  colorCinco.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "lightskyblue";
  });

  let colorSeis = document.getElementById("seis");

  colorSeis.addEventListener("click", function onClick(event) {
    document.getElementById("final").style.backgroundColor = "fuchsia";
  });
}

function calc() {
  var numeroUno, NumeroDos, oper;
  numeroUno = parseInt(document.getElementById("unoCalc").value);
  NumeroDos = parseInt(document.getElementById("dosCalc").value);
  option = document.getElementById("option").value;
  switch (option) {
    case "suma":
      oper = numeroUno + NumeroDos;
      break;
    case "resta":
      oper = numeroUno - NumeroDos;
      break;
    case "multi":
      oper = numeroUno * NumeroDos;
      break;
    case "divis":
      oper = numeroUno / NumeroDos;
      break;
    default:
      oper = 0;
  }
  if (oper < 0) {
    document.getElementById("result").value = 0;
  } else {
    document.getElementById("result").value = oper;
  }
}
