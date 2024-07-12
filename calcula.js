var suma_check=0; // variable acumuladora para sumar el valor de los checkbox

function suma(isCheked,valor){ // Función para sumar los checkbox 
    //recibe un valor boolean, si se seleccionó el checkbox será True, caso contrario False
    if (isCheked){ // si está seleccionado se incrementa
        suma_check+=parseInt(valor);
    }else{ // de lo contrario se decrementa
        suma_check-=parseInt(valor);
    }
    console.log("suma_check: ", suma_check);   //Para ver en consola la variable que acumula
}// suma

function calcula_total(){
    let suma=0; //variable acumuladora
   // Acumula el valor de cada select
    suma+=parseInt(formulario.sel1.value); // hace referencia atributo name sel1
    suma+=parseInt(formulario.sel2.value); // hace referencia atributo name sel2
    suma+=parseInt(formulario.sel3.value); // hace referencia atributo name sel3
  // Acumula el valor del elemento rango
    suma+=parseInt(formulario.rang1.value); // hace referencia atributo name rang1

    alert("La puntuación total es de: "+(suma+suma_check)); // añadimos la suma dde los checkbox 
}
