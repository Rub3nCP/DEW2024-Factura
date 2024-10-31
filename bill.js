let subtotal = 0;
let taxRate = 0; 

function addItem() {
    // Obtener los valores de los inputs
    const concept = document.getElementById("concept").value;
    const quantity = parseFloat(document.getElementById("quantity").value);
    const price = parseFloat(document.getElementById("price").value);

    // Validar que todos los campos estén completos y sean números válidos
    if (!concept || isNaN(quantity) || isNaN(price)) {
        alert("Please enter valid values for all fields.");
        return;
    }

    // Calcular el precio total para este producto
    const total = quantity * price;

    // Agregar el producto a la tabla
    const tableBody = document.getElementById("invoice-body");
    const row = document.createElement("tr");

    // Agregar la clase de fondo azul a la nueva fila
    row.classList.add("blue-row");

    row.innerHTML = `
        <td>${concept}</td>
        <td>${quantity}</td>
        <td>${price.toFixed(2)}€</td>
        <td>${total.toFixed(2)}€</td>
    `;

    tableBody.appendChild(row);

    // Actualizar el subtotal
    subtotal += total;
    document.getElementById("subtotal").textContent = subtotal.toFixed(2) + "€";

    // Limpiar los campos de entrada
    document.getElementById("concept").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

// Función para establecer la tasa de impuestos
function setTax(rate) {
    taxRate = rate;
    // Actualizar el porcentaje de impuestos en la columna "Cantidad" donde está el 0%
    document.getElementById("selected-tax").textContent = `${taxRate}%`;
}

// Función para calcular el total final con impuestos
function calculateTotal() {
    // Calcular los impuestos
    const taxes = subtotal * (taxRate / 100);
    const total = subtotal + taxes;

    // Mostrar los impuestos y el total
    document.getElementById("taxes").textContent = taxes.toFixed(2) + "€";
    document.getElementById("total").textContent = total.toFixed(2) + "€";
}
