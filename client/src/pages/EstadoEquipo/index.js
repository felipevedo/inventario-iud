import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getEstados } from '../../api/helper';

function EstadoEquipo() {
  const [estados, setEstados] = useState([]);

  const setupEstadosEquipo = async () => {
    const { data: { data } } = await getEstados();

    setEstados(data);
  }

  useEffect(() => {
    setupEstadosEquipo();
  }, []);

  return (
    <main>
      <h1 className="pt-2 pb-3">Estado de Equipo</h1>
      <div className="row">
        <div className="col">
          <Link to="crear-o-editar"><div className="btn btn-primary">Crear nuevo</div></Link>
        </div>
      </div>
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha de creación</th>
              <th scope="col">Fecha de actualización</th>
            </tr>
          </thead>
          <tbody>
            {!estados?.length && <p className="mt-2">No hay resultados para mostrar</p>}
            {estados.map((t) => (
              <tr key={t.id}>
                <th scope="row">{t.id}</th>
                <td>{t.nombre}</td>
                <td>{t.estado ? 'activo' : 'inactivo'}</td>
                <td>{new Date(t.fechaCreacion).toDateString()}</td>
                <td>{new Date(t.fechaActualizacion).toDateString()}</td>
                <td>
                  <Link to={`crear-o-editar/${t.id}`}>
                    <button className="btn btn-primary">Editar</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default EstadoEquipo;
