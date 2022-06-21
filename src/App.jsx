import { useDispatch, useSelector } from 'react-redux';
import { dec, inc, rand, res } from './features/counter';

function App() {
  const num = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(inc());
  };
  const handleDec = () => {
    dispatch(dec());
  };

  const handleRes = () => {
    dispatch(res());
  };

  const handleRand = () => {
    const num = Math.floor(Math.random() * 100)
    dispatch(rand(num));
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleRes}>♻︎</button>
      <button onClick={handleRand}>⍟</button>
    </>
  );
}

export default App;
