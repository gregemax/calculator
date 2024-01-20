import { Button } from "@mantine/core";
import { Actions } from "./store/config";
import { useDispatch ,useSelector } from "react-redux";
//import classes from './Demo.module.css'
const Del = () => {
  const state=useSelector((e:any)=>e.canculator.counter)
  const dis = useDispatch();
  //  const customStyle = createStyles((theme) => ({
  //   wrapper: {
  //     display: 'flex',
  //     backgroundColor: '#FFF',
  //     flexDirection: 'column',
  //     width: '100%',
  //     margin: '0',
  //     padding: 0,
  //     gap: '1rem',
  //     borderRadius: theme.radius.lg,
  //   },

  //   searchInput: {
  //     borderRadius: theme.radius.lg,
  //     borderColor: '#7C7C7C',
  //     width: '100%',
  //     backgroundColor: 'red',
  //     minWidth: '200px',
  //     maxWidth: '300px',
  // },
  // }));

  return (
    <>
      <>
        <Button
          
          styles={{
            root: {
              width: "85px",
              height: "45px",
              borderRadius: "8px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.452)",
              //fontSize: "28px",
              fontWeight: "600",
              textTransform: "uppercase",
             // cursor: "pointer",
              backgroundColor:`${state==="first"?'hsl(222, 26%, 31%)':""} ${state==="second"?'rgba(32, 178, 171, 0.651) ':""} ${state==="last"?'rgba(128, 0, 128, 0.829)':""}`
            },
          }}
          onClick={() => dis(Actions.dell(-1))} 
        >
          DEl
        </Button>
      </>
    </>
  );
};

export default Del;
