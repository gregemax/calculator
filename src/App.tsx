import Header from "./Header";
import Lastpart from "./Lastpart";
import Show from "./Show";
import { useSelector } from "react-redux";
//import { Actions } from "./store/config";

const App = () => {
  const state = useSelector((e: any) => e.canculator.counter);

  return (
    <div
      className={`   w-full h-[100vh] ${
        state === "first" ? "bg-body-primary text-white" : ""
      } ${state === "second" ? "bg-body-secondry   text-black " : ""} 
      ${
        state === "last" ? "bg-body-last text-body-show" : ""
      } justify-center flex`} 
    >
      <div>
        <Header />
        <Show />
        <Lastpart />
      </div>
    </div>
  );
};

export default App;
