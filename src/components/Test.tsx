import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { increment, decrement, changeIncrementAmount, } from "../store/slices/countriesSlice";

// export default function TestTwo() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   const incrementAmount = useSelector(
//     (state: RootState) => state.counter.incrementAmount
//   );

//   function handleChange(incrementAmountValue: string) {
//     dispatch(changeIncrementAmount(Number(incrementAmountValue)));
//   };

//   return (
//     <>
//       <h1>Counter</h1>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       {count}
//       <button onClick={()=> dispatch(increment())}>+</button>
//       <button>Change Increment Amount</button>
//     </>
//   );
// }