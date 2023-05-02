import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Spiner = () => {
  return (
    <div className='grid grid-cols-5 gap-6 container mx-auto mt-10'>
        {Array(5).fill("").map((item,i) =>(
            <Skeleton height="250px" key={i}/> 
        ))}
        
    </div>
  )
}

export default Spiner