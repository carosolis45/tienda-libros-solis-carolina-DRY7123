import { useState, useEffect } from 'react';
import { Link } from 'react-router'; // <-- Cambiado a react-router
import { obtenerCategorias } from '../services/apiLibros';

export default function Home() {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Llamamos a nuestra API mock
    const cargarDatos = async () => {
      try {
        const datos = await obtenerCategorias();
        setCategorias(datos);
      } catch (error) {
        console.error('Error al cargar:', error);
      } finally {
        setCargando(false); // Quitamos el mensaje de carga
      }
    };
    cargarDatos();
  }, []); // El arreglo vacío significa "solo ejecútalo una vez"

  if (cargando) {
    return <div className="text-center mt-20 text-xl text-[#4caf50]">Cargando libros... 📚</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-5 pb-24">
      <header className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white p-6 rounded-xl mb-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-2">📚 Tienda de Libros</h1>
        <p className="text-[#a5d6a7]">Explora nuestras categorías</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categorias.map(cat => (
          <div key={cat.id} className="bg-[#1e1e1e] p-6 rounded-xl border border-[#333] shadow-md hover:border-[#4caf50] transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">{cat.nombre}</h3>
            <p className="text-gray-400 mb-4">{cat.descripcion}</p>
            <Link 
              to={`/categoria/${cat.id}`} 
              className="inline-block bg-[#2e7d32] hover:bg-[#4caf50] text-white px-4 py-2 rounded transition-colors"
            >
              Ver Libros
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}