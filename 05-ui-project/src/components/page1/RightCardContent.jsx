import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl rounded-full h-12 w-12 flex flex-col justify-center items-center font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas libero tempora voluptatum facilis quae?</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-600 text-white px-8 py-2 font-medium rounded-full'>{props.tag}</button>
                    <button className='text-white bg-blue-600 px-4 py-2 font-medium rounded-full'><i class="ri-arrow-right-up-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent