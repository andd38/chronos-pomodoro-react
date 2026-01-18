//PascalCase
//App
//ExemploDeComponente
import './styles/global.css';
import './styles/theme.css';
import './components/Heading';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  
  return (
    <>
      <Heading>
        <button><TimerIcon /></button>
        Olá mundo</Heading>
     
      
      <h1>oi</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit
        sed ipsam, sunt nam illo, voluptate eum a possimus at maiores maxime
        est? Voluptates, doloribus aperiam culpa ipsam doloremque fugiat?
      </p>
    </>
  );
}

 