import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'


const Center = (props) => {
    console.log(props.users);
    return (
        <div className='pb-16 pt-6 h-[90vh] flex items-center gap-10 px-18'>
            <LeftText />
            <RightText users={props.users} />
        </div>
    )
}

export default Center