//3 - alterando contexto
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Mudar a contagem</button>
    </div>
  );
};

export default ChangeCounter;
