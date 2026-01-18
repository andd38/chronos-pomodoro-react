//PascalCase
//App
//ExemploDeComponente
import './styles/global.css';
import './styles/theme.css';
import './components/Heading';
import { Heading } from './components/Heading';

export function App() {
  
  return (
    <>
      <Heading attr={123} attr2={'string'}>Olá mundo</Heading>
     
      
      <h1>oi</h1>

      <p style={{color:"black",margin:"10px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit
        sed ipsam, sunt nam illo, voluptate eum a possimus at maiores maxime
        est? Voluptates, doloribus aperiam culpa ipsam doloremque fugiat?
      </p>
    </>
  );
}
