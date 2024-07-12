var text = '{"productos": [' +
    '{ "nombre": "Hamburguesa clásica", "descripcion": "Una jugosa hamburguesa con carne de res, lechuga, tomate y queso cheddar.", "precio": 9.99, "foto": "hamburguesa_clasica.jpg", "tipo": "Comida rápida", "estatus": "Activo" },' +
    '{ "nombre": "Pizza Pepperoni", "descripcion": "Pizza con salsa de tomate, queso mozzarella y rodajas de pepperoni.", "precio": 12.50, "foto": "pizza_pepperoni.jpg", "tipo": "Italiana", "estatus": "Activo" },' +
    '{ "nombre": "Ensalada César", "descripcion": "Ensalada fresca con lechuga romana, crutones, aderezo César y pollo a la parrilla.", "precio": 7.95, "foto": "ensalada_cesar.jpg", "tipo": "Ensaladas", "estatus": "Activo" },' +
    '{ "nombre": "Sushi Variado", "descripcion": "Selección de sushi fresco incluyendo nigiri, sashimi y rollos variados.", "precio": 15.75, "foto": "sushi_variado.jpg", "tipo": "Japonesa", "estatus": "Activo" },' +
    '{ "nombre": "Pasta Alfredo", "descripcion": "Pasta fettuccine en salsa Alfredo cremosa con pollo a la parrilla.", "precio": 11.99, "foto": "pasta_alfredo.jpg", "tipo": "Italiana", "estatus": "Activo" },' +
    '{ "nombre": "Filete Mignon", "descripcion": "Filete de res premium cocido a la parrilla con guarnición de vegetales asados.", "precio": 22.50, "foto": "filete_mignon.jpg", "tipo": "Carnes", "estatus": "Activo" },' +
    '{ "nombre": "Tacos de Camarón", "descripcion": "Tacos mexicanos con camarones frescos, cilantro, cebolla y salsa de aguacate.", "precio": 13.25, "foto": "tacos_de_camaron.jpg", "tipo": "Mexicana", "estatus": "Activo" },' +
    '{ "nombre": "Sopa de Mariscos", "descripcion": "Sopa caliente con una mezcla de mariscos frescos, vegetales y caldo casero.", "precio": 8.50, "foto": "sopa_de_mariscos.jpg", "tipo": "Sopas", "estatus": "Activo" },' +
    '{ "nombre": "Ceviche Peruano", "descripcion": "Ceviche tradicional peruano con pescado fresco marinado en limón, cilantro y ají.", "precio": 10.50, "foto": "ceviche_peruano.jpg", "tipo": "Peruana", "estatus": "Activo" },' +
    '{ "nombre": "Pastel de Chocolate", "descripcion": "Delicioso pastel de chocolate con cobertura de ganache y fresas frescas.", "precio": 5.99, "foto": "pastel_de_chocolate.jpg", "tipo": "Postres", "estatus": "Activo" }' +
']}';



let obj=[];//arreglo que se llenara de objetos JSON
let indexProductoSeleccionado; // es el indice del arreglo


obj = JSON.parse(text);
console.log(obj);

function actualizaTabla(){
    let cuerpo="";
    obj.productos.forEach(function(elemento){
        let registro='<tr>' +
                '<td>' + obj.productos.indexOf(elemento) + '</td>' +
                '<td>' + elemento.nombre + '</td>' +
                '<td>' + elemento.descripcion + '</td>' +
                '<td>' + elemento.precio + '</td>' +
                '<td>' + elemento.foto + '</td>' +
                '<td>' + elemento.tipo + '</td>' +
                '<td>' + elemento.estatus + '</td>' +
                '</tr>';
        cuerpo += registro;
    });
    
    document.getElementById("tblProductos").innerHTML = cuerpo;
}

actualizaTabla();