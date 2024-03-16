import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function StarRating({noOfStars = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick( getCurrentIndex ){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter( getCurrentIndex ){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave( ){
        setHover(rating)
    }

    return(
        <div className=" w-full h-screen flex items-center justify-center gap-x-4 bg-[#1e1e1e] ">
        <div className="px-8 py-8 bg-black/10 border-2 border-black/5 backdrop-blur-2xl rounded-2xl flex items-center justify-center gap-x-4">
        {            
                [...Array(noOfStars)].map((_,index) => {
                    index +=1

                    return(
                    <FaStar
                    className={`${
                        index <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300/70'
                        } cursor-pointer transition-colors duration-300 hover:scale-110 `}                        
                        key={index}
                        onClick={
                            () => handleClick(index)
                        }
                        onMouseEnter={
                            () => handleMouseEnter(index)
                        }
                        onMouseLeave={
                            () => handleMouseLeave()
                        }
                        size={40}
                    />
                    )
                    
                } )
        }
        </div>
        </div>
    )
}