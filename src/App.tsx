//PascalCase
//App
//ExemploDeComponente
import './styles/global.css';
import './styles/theme.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import Button from './components/Button';
export function App() {
  return (
    <>
   
      <Container>
        <Logo/>
      </Container>
        
      <Container>
        <Menu/>
      </Container> 

      <Container>
        <CountDown></CountDown>  
      </Container>    
      <Container>
        <form className='form' action="">
          <div className="formRow">
            <label htmlFor="meuInput">task</label>
            <input type="text" id="meuInput" />
          </div>   
          <div className="formRow">
           <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
           <p>Ciclos</p>
           <p>  0 0 0 0 0</p>
          </div>

          
           <Button></Button>
          
        </form>
      </Container>
      
    </>
  );
}
