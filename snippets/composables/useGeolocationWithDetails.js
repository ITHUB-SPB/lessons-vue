import { ref, watchEffect } from "vue";

import useGeolocation from '../composables/useGeolocation';

const useGeolocationWithDetails = () => {
  const [latitude, longitude] = useGeolocation();
  const country = ref("");
  const city = ref("");
  
  // To find the country and city corresponding to the latitude/longitude
  watchEffect(async ()=>{
    if (latitude.value && longitude.value) {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude.value}&lon=${longitude.value}`
      );
      const data = await response.json();
      if (data && data.address && data.address.country) {
        country.value = data.address.country;
      }
      if (data && data.address) {
        city.value = data.address.city || data.address.town;
      }
    }
  });
  
  return [latitude, longitude, country, city];
}

export default useGeolocationWithDetails;