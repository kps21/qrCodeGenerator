import { useEffect, useState } from "react";
import "./Advice.css";

const AdviceApp = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
      {/* <p>You have read {count} pieces of advice</p> */}
      <Counter count={count} />
    </div>
  );
};

function Counter(props) {
  return (
    <p>
      You read <b>{props.count}</b> piece of advice
    </p>
  );
}

export default AdviceApp;
