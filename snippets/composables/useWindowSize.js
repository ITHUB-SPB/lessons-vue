import { ref, onMounted, onBeforeUnmount } from "vue";

const useWindowSize = () => {
  const windowSize = ref({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
    windowSize.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  onMounted(() => {
    window.addEventListener('resize', updateWindowSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowSize);
  });
  
  return windowSize;
}

export default useWindowSize;