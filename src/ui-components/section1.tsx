import Image from 'next/image'
import React from 'react'
import chef from '../../public/chef.jpg'
import SmallCard from './smallCard'
const Section1 = () => {
    return (
        <>
        <div className=' mt-20'>
            <h1 className=' text-3xl font-bold ml-24'  >You prepare the food, we handle the rest</h1>
            <SmallCard />
            <Image src={chef} alt='chef ' width={1400} height={0} className=' mt-5 relative -z-10'></Image>
            

        </div>
        </>
    )
}

export default Section1