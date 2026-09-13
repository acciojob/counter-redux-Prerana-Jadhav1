
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
