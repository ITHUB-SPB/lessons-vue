import { ref, onMounted } from "vue";

const useGeolocation = () => {
  const latitude = ref(null);
  const longitude = ref(null);
  
  const handleGeolocation = (position) => {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
  };

  const errorGeolocation = (error) => {
    console.log("Geolocation error:", error.message);
  };

  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleGeolocation, errorGeolocation);
    } else {
      console.log("Geolocation is not available in this browser.");
    }
  });  
  
  return [latitude, longitude];
}

export default useGeolocation;