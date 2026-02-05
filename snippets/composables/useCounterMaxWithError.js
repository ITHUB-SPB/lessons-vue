import useCounter from "../composables/useCounter";
import { ref, onMounted } from "vue";

const useCounterMaxWithError = (init, max) => {
  const [count, increment, decrement] = useCounter(init);
  const error = ref("");
  const incrementMax = () => {
    if (count.value >= max) {
      error.value = "Maximum value reached!";
    }
    else {
      increment();
      error.value = "";
    }
  }
  const decrementMax = () => {
    decrement();
    if (count.value <= max) {
      error.value = "";
    }
  }
  onMounted(()=> {
    if (count.value > max) error.value = "Maximum value reached!";
  });
  return [count, incrementMax, decrementMax, error];
}

export default useCounterMaxWithError;