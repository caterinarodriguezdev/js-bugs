function tieneDescuento(producto) {
	if (producto.descuento) {
		let descuento = 'tiene descuento';
	} else {
		let descuento = 'no tiene descuento';
	}
	console.log(`El producto ${descuento}`);
}

const producto = {
	descuentro: true,
}

tieneDescuento(producto);