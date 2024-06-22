import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 
export function InputWithButton() {
  return (
    <div className="flex px-3 w-full  items-center space-x-2">
      <Input className=" " type="email" placeholder="Your street and street number" />
      <Button className=" bg-[#D70F64]  " type="submit">Find food</Button>
    </div>
  )
}