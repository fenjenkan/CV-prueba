import React from 'react'
import Image from 'react-bootstrap/Image'

export const Channel = ({name,number,image}) => {
  return (
    <div className=' p-2 text-white aling-text-center '>
        <span className="p-4 fw-bolder fs-4">{number}</span>
        <Image src={image} width={100} height={70}/>
    </div>
  )
}
