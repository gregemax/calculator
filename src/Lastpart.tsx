
import { useDispatch,useSelector } from "react-redux";

import { Actions } from "./store/config";
import Costum from "./costum";
import Del from "./Del";
import LastBtn from "./lastBtn";
const Lastpart = () => {
  const dis=useDispatch()
  const handle=()=>{
    dis(Actions.equal(""))
  }
  const handleReset =()=>{
    dis(Actions.reset(""))
  }
  const state = useSelector((e: any) => e.canculator.counter);
    
  return (
    <div className={` ${state==="first" ?"bg-main":""}${state==="second" ?" bg-last-last":""} ${state==="last" ?" bg-last-second":""} w-fit h-fit rounded-2xl p-[20px]   shadow-lg shadow-black  `}>
    <div className="   w-fit h-fit  grid grid-cols-4  gap-y-8   rounded-2xl    ">
      
        <Costum  phone={"7"} />
        <Costum  phone={"8"} />
        <Costum phone={"9"} />
        <Del />
      
      
        <Costum phone={"4"} />
        <Costum phone={"5"} />
        <Costum phone={"6"} />
        <Costum phone={"+"} />
      
      
        <Costum phone={"1"} />
        <Costum phone={"2"} />
        <Costum phone={"3"} />
        <Costum phone={"-"} />
      
      
        <Costum phone={"."} />
        <Costum phone={"0"} />
        <Costum phone={"/"} />
        <Costum phone={"*"} />
      

    </div>
    <div>
<div className="flex justify-between grid-cols-2   mt-6 mb-4 " >
        <div className=" hover:opacity-3" > <LastBtn handle={handleReset } text="Reset" col={`${state==="first"?'hsl(222, 26%, 31%)':""} ${state==="second"?'rgba(32, 178, 171, 0.651) ':""} ${state==="last"?'rgba(128, 0, 128, 0.829)':""}`} /></div>
        <div><LastBtn handle={handle} text="=" col={`${state==="first"?'hsl(6, 63%, 50%)':""} ${state==="second"?'hsl(25, 98%, 40%)':""} ${state==="last"?'skyblue':""}`} /></div>
      </div>
</div>
    </div>
  );
};

export default Lastpart;
