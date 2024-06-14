
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button";
import foodpanda from "../../public/foodpanda.webp"
import { InputWithButton } from "@/components/ui/inputWithButton";
const HeroSection = () => {
    return (
        <>
        <div className=" bg-slate-300">
            <div className="   items-center flex justify-between  sm:px-10">
                {/* Left Side */}
                <div className="md:w-[614px] w-full space-y-8 ">

                    <h1 className="text-3xl font-bold sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl leading-tight mt-8">
                        It's the food and groceries you love, delivered
                    </h1>
                    <div className=" w-full h-22 py-5 shadow-lg shadow-slate-400 bg-white rounded-xl items-center justify-center flex ">

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
                        width={600}
                        height={600}
                        className="pt-5 md:pt-8 lg:mt-3 ml-[140px]  "
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default HeroSection