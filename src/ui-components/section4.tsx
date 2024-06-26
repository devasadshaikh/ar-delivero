import React from 'react'
import SmallCard from './smallCard'
import Image from 'next/image'
import pic from '../../public/home-corporate-pk.jpg'

const Section4 = () => {
    return (
        <>
            <div className=' mt-20'>
                <h1 className=' text-3xl font-bold ml-24'  >You prepare the food, we handle the rest</h1>
                <SmallCard pixels=' mt-[42rem] ' />
                <Image src={pic} alt='chef ' width={1400} height={0} className=' mt-5 relative -z-10'></Image>


            </div>
        </>
    )
}

export default Section4