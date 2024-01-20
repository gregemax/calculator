import { Button } from "@mantine/core";
import { Actions } from "./store/config";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles.module.css';

interface props {
  phone: string;
}

const Costum: React.FC<props> = ({ phone }) => {
  const dis = useDispatch();
  const state = useSelector((e: any) => e.canculator.counter);
  //const classes=useStyles()
  return (
    <div >
      <div
        className={`${state === "first" ? "" : ""}${
          state === "second" ? "" : ""
        }${
          state === "last" ? " bg-last-first " : ""
        } phone:text-sm  h-[47px] shadow-2xl  w-20 p-0 pb-1   rounded-lg shadow-black`}
      >
        <Button
          // gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}
         className={styles.Container}
          size="responsive"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            color: `${state === "first" ? "black" : ""} ${
              state === "second" ? "black" : ""
            }${state === "last" ? "yellow" : ""} `,
            //borderBottom: "1px solid rgba(0, 0, 0, 0.452)",
            fontSize: "25px",
            fontWeight: "600",
            textTransform: "uppercase",
            cursor: "pointer",
            background: `${state === "first" ? "white" : ""} ${
              state === "second" ? "white" : ""
            }${state === "last" ? "hsl(268, 75%, 9%)" : ""} `,
            padding: "0px",
            textAlign:'center'
          }}
          onClick={() => dis(Actions.add(phone))}
        >
          {phone}
        </Button>
      </div>
    </div>
  );
};

export default Costum;
