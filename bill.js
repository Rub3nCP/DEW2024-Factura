let tasa = 0.3;
let subtotal = 0;

function insertarProducto() {
    const concepto = document.querySelector("#concepto").value;
    const cantidad = parseInt(document.querySelector("#cantidad").value);
    const precio = parseFloat(document.querySelector("#precio").value);

if (concepto && cantidad > 0 && precio > 0) {
    const precioTotal = cantidad * precio;
    subtotal += precioTotal;

    const fila = document.createElement("tr");

    const celdaConcepto = document.createElement("td");
    celdaConcepto.textContent = concepto;
    fila.appendChild(celdaConcepto);

    const celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = cantidad;
    fila.appendChild(celdaCantidad);

    const celdaPrecioUnitario = document.createElement("td");
    celdaPrecioUnitario.textContent = precio.toFixed(2) + "€";
    fila.appendChild(celdaPrecioUnitario);

    const celdaPrecioTotal = document.createElement("td");
    celdaPrecioTotal.textContent = precioTotal.toFixed(2) + "€";
    fila.appendChild(celdaPrecioTotal);

    const celdaEliminar = document.createElement("td");
    const xEliminar = document.createElement("span");
    xEliminar.textContent = "X"; 
    xEliminar.onclick = function () { eliminarFila(fila, precioTotal); };
    celdaEliminar.appendChild(xEliminar);
    fila.appendChild(celdaEliminar);

    document.querySelector("#tablaProductos tbody").appendChild(fila);

    actualizarTotales();

    document.querySelector("#concepto").value = "";
    document.querySelector("#cantidad").value = "";
    document.querySelector("#precio").value = "";
    } else {
    alert("Por favor, completa todos los campos correctamente.");
    }
}

function eliminarFila(fila, precioTotal) {
    subtotal -= precioTotal;
    fila.remove();
    actualizarTotales();
}

function cambiarTasa(nuevaTasa) {
    tasa = nuevaTasa;
  document.querySelector("#tasa").textContent = (tasa * 100).toFixed(0) + "%";
    actualizarTotales();
}

function actualizarTotales() {
    const impuestos = subtotal * tasa;
    const total = subtotal + impuestos;

    document.querySelector("#subtotal").textContent = subtotal.toFixed(2) + "€";
    document.querySelector("#impuestos").textContent = impuestos.toFixed(2) + "€";
    document.querySelector("#total").textContent = total.toFixed(2) + "€";
}