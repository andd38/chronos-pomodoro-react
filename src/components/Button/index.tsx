import { PlayIcon } from "lucide-react";
import styles from './styles.module.css';

export default function Button() {
  return (
    <>
      <div className={styles.play}>
        <a className={styles.play} href='#'>
          
          <PlayIcon></PlayIcon>
        
        </a>
        
      </div>
    
    </>
  )
}
