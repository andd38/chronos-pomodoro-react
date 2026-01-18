//PascalCase
//App
//ExemploDeComponente
import './styles/global.css';
import './styles/theme.css';
import './components/Heading';
import { Heading } from './components/Heading';

export function App() {
  console.log('oi');
  return (
    <>
      <Heading></Heading>
     
      
      <h1>oi</h1>

      <p style={{color:"black",margin:"10px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit
        sed ipsam, sunt nam illo, voluptate eum a possimus at maiores maxime
        est? Voluptates, doloribus aperiam culpa ipsam doloremque fugiat?
      </p>
    </>
  );
}
