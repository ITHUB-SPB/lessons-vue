import useMap from "../composables/useMap.js"

const map = {
  updated(el, binding) {
    const latitude = binding.value.latitude;
    const longitude = binding.value.longitude;
    if (latitude && longitude) {
      if (el._map) el._map.remove();
      el._map = useMap(latitude, longitude, el.id);
    }
    else if (el._map) {
      el._map.remove();
      el._map = null;
    }
  }
}

export default map;

