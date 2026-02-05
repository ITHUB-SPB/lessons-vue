import useCounter from "../composables/useCounter";

const useCounterMax = (init, max) => {
  const [count, increment, decrement] = useCounter(init);
  const incrementMax = () => {
    if (count.value >= max) {
      return;  // Avoid incrementing
    }
    else {
      increment();  // Increment
    }
  }
  return [count, incrementMax, decrement];
}

export default useCounterMax;