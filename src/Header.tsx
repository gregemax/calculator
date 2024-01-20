import {  Container, Text } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./store/config";

const Header = () => {
  const dis = useDispatch();
  const state = useSelector((e: any) => e.canculator.counter);
  return (
    <div className=" flex items-center justify-between">
      <Text fz={35}>calc</Text>
      <div className=" flex justify-center items-center">
        <h6 className="  mt-3 text-[15px] uppercase "> theme</h6>
        <div>
          <Container>
            <div className="main-color-div m-[4px] p-0 tracking-[.25em]  ">
              <p className="">1 2 3</p>
              <div className="color flex w-[53px] rounded-xl bg-main p-[3px] justify-between  cursor-pointer ">
                <div
                  onClick={() => {
                    dis(Actions.first(""));
                  }}
                  className={` ${
                    state === "first" ? "bg-max" : ""
                  } change hi1 h-[13px] w-3 rounded-lg hover:bg-max  `}
                ></div>
                <div
                  onClick={() => {
                    dis(Actions.second(""));
                  }}
                  className={`${
                    state === "second" ? "bg-ax" : ""
                  } color2 hi2 h-[13px] w-3 rounded-lg hover:bg-ax mr-1 ml-1  `}
                ></div>
                <div
                  onClick={() => {
                    dis(Actions.last(""));
                  }}
                  className={`${
                    state === "last" ? "bg-greg" : ""
                  } color2 hi3 h-[13px] w-3 rounded-lg hover:bg-greg `}
                ></div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
