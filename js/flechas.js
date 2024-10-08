let currentIndex = {
    grips: 0,
    pedal: 0,
    tenedor: 0,
    platos: 0,
    timon: 0 // Sección de Timones
};

function scrollProducts(section, direction) {
    const productList = document.querySelector(`#${section} .product-container .lista`);
    const totalProducts = productList.children.length;

    // Calcula el nuevo índice temporal
    let newIndex = currentIndex[section] + direction;

    // Asegúrate de que el índice esté dentro de los límites
    if (newIndex < 0) {
        newIndex = 0; // Limite inferior
    } else if (newIndex > totalProducts - 1) {
        newIndex = totalProducts - 1; // Limite superior
    }

    // Solo actualiza currentIndex y desplaza si hay un cambio en el índice
    if (newIndex !== currentIndex[section]) {
        currentIndex[section] = newIndex;

        // Desplaza la lista de productos
        const visibleItems = 5; // Cambia este valor según cuántos elementos deseas mostrar
        const offset = -currentIndex[section] * (100 / visibleItems); 
        productList.style.transform = `translateX(${offset}%)`;
    }
}
