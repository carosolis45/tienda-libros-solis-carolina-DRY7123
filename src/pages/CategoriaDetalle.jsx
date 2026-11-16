import { useParams, Link } from 'react-router';
import { useState, useEffect } from 'react';
import { obtenerCategorias } from '../services/apiLibros';

export default function CategoriaDetalle() {
  const { id } = useParams();
  const [categoria, setCategoria] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Libros de ejemplo (podrían venir de otra API)
  const librosMock = {
    1: [{ titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez' }, { titulo: '1984', autor: 'George Orwell' }],
    2: [{ titulo: 'Dune', autor: 'Frank Herbert' }, { titulo: 'Fundación', autor: 'Isaac Asimov' }],
    3: [{ titulo: 'El Nombre de la Rosa', autor: 'Umberto Eco' }, { titulo: 'Asesinato en el Orient Express', autor: 'Agatha Christie' }],
    4: [{ titulo: 'Orgullo y Prejuicio', autor: 'Jane Austen' }, { titulo: 'Bajo la Misma Estrella', autor: 'John Green' }],
    5: [{ titulo: 'It', autor: 'Stephen King' }, { titulo: 'Drácula', autor: 'Bram Stoker' }],
  };

  useEffect(() => {
    const cargarCategoria = async () => {
      const datos = await obtenerCategorias();
      // Buscamos la categoría que coincida con el ID de la URL
      const catEncontrada = datos.find(c => c.id === Number(id));
      setCategoria(catEncontrada);
      setCargando(false);
    };
    cargarCategoria();
  }, [id]);

  if (cargando) return <div className="text-center mt-20 text-xl text-[#4caf50]">Cargando libros...</div>;
  if (!categoria) return <div className="text-center mt-20 text-xl text-red-500">Categoría no encontrada</div>;

  const libros = librosMock[id] || [];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#1e1e1e] border border-[#333] rounded-xl shadow-lg text-white">
      <header className="mb-8 border-b border-[#444] pb-4">
        <h2 className="text-3xl font-bold text-[#4caf50] mb-2">{categoria.nombre}</h2>
        <p className="text-gray-400">{categoria.descripcion}</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {libros.map((libro, index) => (
          <div key={index} className="bg-[#121212] p-4 rounded-lg border border-[#444]">
            <h3 className="text-xl font-bold text-white mb-1">{libro.titulo}</h3>
            <p className="text-gray-400 text-sm">Autor: {libro.autor}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/" className="inline-block bg-[#333] hover:bg-[#555] text-white px-6 py-2 rounded transition-colors">
          ← Volver al catálogo
        </Link>
      </div>
    </div>
  );
}