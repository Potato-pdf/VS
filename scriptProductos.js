var text = '{"productos":[ ' +
'{"nombre" : "Tostada de Tinga", "descripcion" : "Tostada con pollo desmenuzado en salsa de tomate", "foto" : "tostada_tinga.jpg", "precio" : 30.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Enchiladas Verdes", "descripcion" : "Tortillas rellenas de pollo bañadas en salsa verde", "foto" : "enchiladas_verdes.jpg", "precio" : 50.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Sopes", "descripcion" : "Tortilla gruesa con frijoles, carne y crema", "foto" : "sopes.jpg", "precio" : 20.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Chilaquiles", "descripcion" : "Tortilla frita con salsa roja o verde, queso y crema", "foto" : "chilaquiles.jpg", "precio" : 40.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Guacamole", "descripcion" : "Puré de aguacate con tomate, cebolla y cilantro", "foto" : "guacamole.jpg", "precio" : 25.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Tamal", "descripcion" : "Tamal hecho de maíz tierno", "foto" : "tamal_elote.jpg", "precio" : 20.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Champurrado", "descripcion" : "Bebida caliente de masa de maíz y chocolate", "foto" : "champurrado.jpg", "precio" : 20.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Atole de Arroz", "descripcion" : "Bebida caliente de arroz y leche", "foto" : "atole_arroz.jpg", "precio" : 15.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Pulque", "descripcion" : "Bebida fermentada de la savia del maguey", "foto" : "pulque.jpg", "precio" : 50.0, "tipo" : si, "estatus" : true},' +
'{"nombre" : "Cerveza Artesanal", "descripcion" : "Cerveza producida de forma artesanal en México", "foto" : "cerveza_artesanal.jpg", "precio" : 60.0, "tipo" : si, "estatus" : true}' +
']}';

let obj = [];
let indexProductosSeleccionados;
obj = JSON.parse(text);
console.log(obj);

document.getElementById ("txNombre").value = obj.productos [index].nombre;
document.getElementById ("txDescripcion").value = obj.productos [index].descripcion;
document.getElementById ("txPrecio").value = obj.productos [index].precio
document.getElementById ("txTipo").value = obj.productos [index].tipo;
document.getElementById ("txFoto").src = ruta  obj.productos [index].foto;
document.getElementById ("txFotoRuta").value = "";
indexProductosSeleccionados = index;


document.getElementById ("btnModificar").classList.remove ("disable");
document.getElementById ("btnEliminar").classList.remove ("disable");
document.getElementById ("btnLimpiar").classList.remove ("disable");
document.getElementById ("btnAgregar").classList.add ("disable");

// METODO LIMPIAR
function limpiar (){
    document.getElementById ("txNombre").value = '';
document.getElementById ("txDescripcion").value = '';
document.getElementById ("txPrecio").value = '';
document.getElementById ("txTipo").value = '';
document.getElementById ("txFoto").src = 'img/n.jpg';
document.getElementById ("txFotoRuta").value = "";

document.getElementById ("btnModificar").classList.add("disable");
document.getElementById ("btnEliminar").classList.add ("disable");
document.getElementById ("btnLimpiar").classList.add ("disable");
document.getElementById ("btnAgregar").classList.remove ("disable");

}

funcition obtenerNombreFoto () {
    let nombreFoto;
    nombreFoto = document.getElementById('txFotoRuta').value;
    nombreFoto = nombreFoto.substring()=;
}