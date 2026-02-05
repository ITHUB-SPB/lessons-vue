import { customRef } from 'vue';

const useUpperCase = (initValue) => {
  return customRef((track, trigger) => {
    let value = initValue;  // value will be the tracked variable
    return {
      get() {
        // track the dependency when the value is read
        track();
        return value.toUpperCase();
      },
      set(newValue) {
        // update the value and trigger reactivity
        value = newValue;
        trigger();
      }
    };
  });
};

export default useUpperCase;