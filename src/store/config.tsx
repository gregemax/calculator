import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "calculator",
  initialState: {
    counter: "first",
    show: "",
  },
  reducers: {
    add(state, action) {
      //action.type='greg'
      state.show = state.show + action.payload;
    },
    equal(state, action) {
      const fun = async () => {
        try {
        if (state.show==='') {
          
        }else{
          state.show = eval(state.show);
        }
        } catch (error) {
          alert("syntax error")
        }
      };
      fun();
    },
    reset(state, action) {
      state.show = "";
    },
    dell(state, action) {
 
      state.show= state.show.toString().slice(0,action.payload)
      
       
    },
    first(state,action){state.counter="first"}
    ,second(state,action){state.counter="second"}
    ,last(state,action){state.counter="last"}
  },
});
export default slice;
const Actions = slice.actions;
export { Actions };
