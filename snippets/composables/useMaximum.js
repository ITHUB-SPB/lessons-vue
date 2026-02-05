import { customRef } from "vue";

const useMaximum = (max) => {
  // Create a custom reference (customRef)
  return customRef((track, trigger) => {
    let value = 0;  // value will be the variable being tracked, initialized here to 0.
    return {
      get() {
        // Track the dependency when the value is read.
        track();
        return value;
      },
      set(newValue) {
        // Update the value and trigger reactivity.
        if (newValue <= max) value = newValue;
        trigger();
      }
    };
  });
}

export default useMaximum;