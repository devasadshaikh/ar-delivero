import { Button } from '@/components/ui/button'
import React from 'react'

const SmallCard = () => {
  return (
    <>
     <div className=' w-5/12 h-96 bg-white rounded-xl shadow-md shadow-slate-300 z-50  absolute ml-24 mt-[42rem]'>
     <h1 className=' font-semibold text-2xl ml-5 mt-3'>List your restaurant or shop on foodpanda</h1>
     <p className=' font-medium text-lg text-balance ml-5 mt-6'>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
     <p className=' font-medium text-lg  ml-5 mt-6'>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
     <p className=' font-medium text-lg text-balance ml-5 mt-6'>Interested? Let's start our partnership today!</p>

     <Button className=' ml-5 mt-6'>Get Started</Button>

     </div>
    </>
  )
}

export default SmallCard