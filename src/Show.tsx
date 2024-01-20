import { useSelector } from "react-redux"

const Show = () => {
  const max= useSelector((e:any)=>e.canculator.show)
  const state= useSelector((e:any)=>e.canculator.counter)
  
  
  return (
    <div className={`${state==="first"?"bg-main":""} ${state==="second"?"bg-white":""} ${state==="last"?"bg-body-last":""} shadow-lg shadow-black  mb-6 h-[100px] items-center flex rounded-xl     ` }>
      <input value={max}  style={{
      background:"transparent",
       width:"100%",
       border:'none',
       outline:'none',
       fontSize:"30px" 
        
      }} onChange={(e)=>e.target.value} className=" text-right"   />
    </div>
  )
}

export default Show