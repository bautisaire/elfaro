import {Link} from 'react-router-dom';

export default function Main(){
    return <div>
        <ul>
            <li>Facturación</li>
            <li>Costos</li>
            <li>Clientes</li>
            <li><Link to="local">Local</Link></li>
            <li>Materia prima</li>
        </ul>
    </div> // acomodar los componetes, diferenciar entre componentes y paginas.
}