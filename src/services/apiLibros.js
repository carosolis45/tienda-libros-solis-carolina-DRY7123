const categoriasLibros = [
  { id: 1, nombre: 'Ficción', descripcion: 'Novelas y relatos imaginarios' },
  { id: 2, nombre: 'Ciencia Ficción', descripcion: 'Futuro, tecnología y espacio' },
  { id: 3, nombre: 'Misterio', descripcion: 'Intriga y suspenso' },
  { id: 4, nombre: 'Romance', descripcion: 'Historias de amor' },
  { id: 5, nombre: 'Terror', descripcion: 'Miedo y sobrenatural' }
];

export const obtenerCategorias = () => {
  return new Promise((resolve) => {
    // Simulamos un retraso de 1 segundo (como si fuera un servidor real)
    setTimeout(() => {
      resolve(categoriasLibros);
    }, 1000);
  });
};