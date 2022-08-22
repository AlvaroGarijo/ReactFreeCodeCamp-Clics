import './App.css';
import { Button } from './componentes/Button';
import { Counter } from './componentes/Counter';
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import {useState} from 'react'

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClic = () => {
   setNumClicks(numClicks + 1);
  }
  const handleLessClic = () => {
    setNumClicks(numClicks - 1);
  }
  const counterReset = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='containerWrapper'>
        <Counter numClicks={numClicks}/>
        <Button
         text= 'Clic me  +1'
         isButtonOfClic={true}
         handleClic={handleClic}/>
          <Button
         text= 'Click me  -1'
         isButtonOfClic={true}
         handleClic={handleLessClic}/>
        <Button
          text='Reset'
          isButtonOfClic={false}
          handleClic={counterReset}/>
      </div>
    </div>
  );
}

export default App;
