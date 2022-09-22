import { Link } from 'react-router-dom';
import "./style.css"
export const Menu = ()=> {
    return(
    <>
<body>
    <header className="cabecalho">
    <h1 className="logo">Sayonara</h1>
    <nav className="cabecalho-menu">
       <Link to= '/' className="cabecalho-menu-item">Home </Link> 
      <Link to= '/sobre' className="cabecalho-menu-item">Sobre</Link>
     <Link to= '/contatos' className="cabecalho-menu-item">Contatos</Link>
    </nav>
    </header>
    </body>
    </>
    );
 
}