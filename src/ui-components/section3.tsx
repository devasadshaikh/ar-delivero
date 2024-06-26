import Image from "next/image"
import Mobile from "../../public/mobile.webp"
import qrcode from "../../public/qrcode.png"
const Section3 = () => {
  return (
    <>
      <div className=' mt-20'>
        <h1 className=" text-3xl font-bold ml-24"  >Put us in your pocket</h1>
        <div className=" flex justify-center">

          <div className=" w-11/12 mt-5   h-80   rounded-2xl bg-[#D70F64]">
            <div className="   items-center flex justify-between" >
              <div className=" mb-24">
                <h1 className="  ml-10 font-semibold text-white text-2xl">Download the food and groceries you love</h1>
                <div className=" items-center flex justify-between">
                  <div className=" ml-10 stroke-white ">
                    <Image src={qrcode} alt="qrcode" width={120} height={120} ></Image>
                  </div>
                  <div>
                    <p className=" text-white text-balance ">It's all at your fingertips – the restaurants and</p>
                    <p className=" text-white text-balance ">shops you love. Find the right food and</p>
                    <p className=" text-white text-balance ">groceries to suit your mood, and make the</p>
                    <p className=" text-white text-balance ">first bite last. Go ahead, download us.</p>
                  </div>
                </div>

              </div>
              <div className=" ">
                <Image src={Mobile} alt='chef ' width={500} height={900} className='   relative z-10'></Image>
              </div>
            </div>
          </div>


        </div>




      </div>
    </>
  )
}

export default Section3