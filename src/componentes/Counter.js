import '../styles/Counter.css'

export const Counter = ({ numClicks }) => {
  return (
    <div className='counter'>
        {numClicks}
    </div>
  )
}
