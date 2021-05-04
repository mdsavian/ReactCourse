import { useState, useEffect } from "react";

const useCounter = (foward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (foward)
        setCounter((prevCounter) => prevCounter + 1);
        else 
        setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter
};

export default useCounter;
