
import Image from "next/image"
import foodpanda from "../../public/foodpanda.webp"
import { InputWithButton } from "@/components/ui/inputWithButton";

const HeroSection = () => {
    return (
        <>
            <div className=" bg-slate-50">
                <div className="   items-center flex justify-between  sm:px-10">
                    {/* Left Side */}
                    <div className="md:w-[460px] w-full ">

                        <h1 className=" text-nowrap ml-7  text-3xl font-bold sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl  mt-8">
                            It's the food and groceries you love,
                        </h1>
                        <h1 className=" ml-7  text-nowrap  text-3xl font-bold sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl"> delivered</h1>
                        <div className=" mt-8 ml-7  w-[640px]   h-22 py-5 shadow-lg shadow-slate-400 bg-white rounded-xl items-center justify-center flex ">

                            <InputWithButton />
                        </div>
                        {/* <p className="">
                        Enter the world of seamless crypto transactions with PoliSwap,
                        where connectivity meets opportunity. Connect your wallet and
                        experience the ease of PoliSwap today.
                    </p> */}
                        {/* <div className="flex justify-start relative z-10 gap-x-3 md:gap-x-3 items-center ">
                        <Link href="/create-account">
                            <Button className=" text-xs sm:text-sm px-4 sm:px-4 ">Create An Account</Button>

                        </Link>

                        <Link href="/login">
                            <Button
                                className="text-xs sm:text-base px-14 sm:px-14  border-[#787878]"
                                variant={"outline"}
                            >
                                Log in
                            </Button>
                        </Link>
                    </div> */}
                    </div>
                    {/* Right Side */}
                    <div>
                        <Image
                            src={foodpanda}
                            alt="Mobile"
                            width={2000}
                            height={2000}
                            className="pt-5 md:pt-8 lg:mt-3 ml-80 "
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection