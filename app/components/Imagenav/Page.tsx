import React from 'react'
import Image from "next/image";
import imgheader from "../../img/imgheader.jpg"

function Page() {
  return (
    <div> <div className='img'> 
    <Image 
    src={imgheader}
    style={{
     width: '100%',
     height: '250', 
      }}
    
     className="hidden md:block"
      alt="pizza"/> 
   </div>  </div>
  )
}

export default Page