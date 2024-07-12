function calcularCURP() {
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidoPaterno = document.getElementById('apellidoPaterno').value.toUpperCase();
    var apellidoMaterno = document.getElementById('apellidoMaterno').value.toUpperCase();
    var fechaNacimiento = document.getElementById('fechaNacimiento').value;
    var genero = document.getElementById('genero').value;
    var estado = document.getElementById('estado').value.toUpperCase();
    var municipio = document.getElementById('municipio').value.toUpperCase();
  
    var primeraLetraApellidoPaterno = apellidoPaterno.charAt(0);
    var primeraVocalApellidoPaterno = obtenerPrimeraVocalInterna(apellidoPaterno);
    var primeraLetraApellidoMaterno = apellidoMaterno.charAt(0);
    var primeraLetraNombre = nombre.charAt(0);
  
    var fechaFormateada = fechaNacimiento.split('-').slice(2).join('');
  
    var claveEstado = obtenerClaveEstado(estado);
    var claveMunicipio = obtenerClaveMunicipio(municipio);
  
    var curp = (
      primeraLetraApellidoPaterno + primeraVocalApellidoPaterno + primeraLetraApellidoMaterno +
      primeraLetraNombre + fechaFormateada + genero + claveEstado + claveMunicipio
    ).toUpperCase();
  
    mostrarResultado(curp);
  }
  
  function obtenerPrimeraVocalInterna(apellido) {
    var vocales = ['A', 'E', 'I', 'O', 'U'];
    for (var i = 1; i < apellido.length; i++) {
      if (vocales.includes(apellido.charAt(i))) {
        return apellido.charAt(i);
      }
    }
    return 'X';
  }
  
  function obtenerClaveEstado(estado) {
    var estados = {
      'AS': '01',
      'BC': '02',
      'GTO' :'03'
    };
    return estados[estado] || 'NE';
  }
  
  function obtenerClaveMunicipio(municipio) {
    var municipios = {
  
      'AGUASCALIENTES': '001',
      'JESÚS MARÍA': '002',
      'LEON' :'003'  
           
    };
    return municipios[municipio.toUpperCase()] || '999';
  }
  
  function mostrarResultado(curp) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h3>Tu CURP es:</h3><p>' + curp + '</p>';
  }
  