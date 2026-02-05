import { ref } from "vue";

const useCounter = (init) => {
  const count = ref(init);
  const increment = () => {
    count.value++;
  }
  const decrement = () => {
    count.value--;
  }
  return [count, increment, decrement];
}

export default useCounter;