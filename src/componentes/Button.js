import '../styles/Button.css'

export const Button = ({ text, isButtonOfClic, handleClic }) => {
  return (
   
    <button 
        className={isButtonOfClic ? 'button-click' : 'button-reset'} //   condicional ternario (si es clase click, será boton de click, si no, será botón de reseteo)
        onClick={handleClic}                                         //   manejamos la función del botón mediante el prop de handleClic, para definir qué va a hacer
        > 
        {text}
    </button>
  )
}
