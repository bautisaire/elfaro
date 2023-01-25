import logo from '../../img/faro.png';
import './header.css';
export default function Header(){
    return <div className='header-container'>
        <img src={logo} alt="logo" />
        <h1>El Faro - Administración</h1>
    </div>
}