import mazar from '../../././../public/mazar.jpg'
import Image from 'next/image'
const cards = [
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    },
    {
        image: "/mazar.jpg",
        title: "Karachi",

    }
]

const Section2 = () => {
    return (
        <>
            <div className=" mt-56">
                <h1 className=" text-3xl font-bold ml-24">Find us in these cities and many more!</h1>

                <div className='  flex justify-center mt-8'>
                    <div className=' w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        {
                            cards.map((item, i) => {
                                return (
                                    <div className=' ' key={i}>

                                        <Image src={item.image} alt={item.title} width={100} height={100} className=' relative -z-30 rounded-lg w-screen h-fit' />


                                        <h1 className=' font-bold mt-2'>{item.title}</h1>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2