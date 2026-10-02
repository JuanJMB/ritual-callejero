/* Catálogo central de la Primera Cápsula */
window.RC_CATALOG = {
  brand: {
    name: "Ritual Callejero",
    tagline: "Dos prendas. Un primer ritual.",
    logo: "assets/logo.png",
    logoAlt: "Logotipo de Ritual Callejero sobre fondo negro",
  },
  products: [
    {
      id: "craneo",
      name: "Camiseta gráfica — Cráneo",
      slug: "producto-craneo.html",
      image: "assets/craneo.jpg",
      imageCard: "assets/craneo-card.jpg",
      imageAlt:
        "Camiseta negra con estampado de cráneo de toro astado dentro de un círculo zodiacal en tonos crema y rojo",
      description:
        "Estampado central de cráneo de toro astado sobre un anillo de signos zodiacales. Paleta crema, negro y rojo oxidado sobre tejido negro con acabado lavado. Recorte de detalle disponible para explorar la ilustración.",
      detailImage: "assets/details/craneo-detalle.jpg",
      detailAlt:
        "Acercamiento del estampado del cráneo y el círculo zodiacal de la camiseta Cráneo",
      detailCaption: "Recorte de la misma fotografía · detalle del estampado",
      // Campos comerciales pendientes: se omiten del DOM hasta tener datos reales
      price: null,
      sizes: null,
      composition: null,
      care: null,
    },
    {
      id: "ultima-cancion",
      name: "Camiseta Western — Última Canción",
      slug: "producto-ultima-cancion.html",
      image: "assets/ultima-cancion.jpg",
      imageCard: "assets/ultima-cancion-card.jpg",
      imageAlt:
        "Camiseta negra con ilustración western: guitarra, iglesia y atardecer, con el texto «Even Love Has Its Last Song»",
      description:
        "Ilustración western de atardecer: guitarra al borde del camino, iglesia al final de la senda y cielo encendido. Tipografía desgastada en naranja y crema. Recorte de detalle para leer el gráfico completo.",
      detailImage: "assets/details/ultima-cancion-detalle.jpg",
      detailAlt:
        "Acercamiento del estampado western con texto y atardecer de la camiseta Última Canción",
      detailCaption: "Recorte de la misma fotografía · detalle del estampado",
      price: null,
      sizes: null,
      composition: null,
      care: null,
    },
  ],
};

window.RC_CATALOG.getProduct = function getProduct(id) {
  return this.products.find(function (p) {
    return p.id === id;
  });
};

window.RC_CATALOG.getOther = function getOther(id) {
  return this.products.find(function (p) {
    return p.id !== id;
  });
};
