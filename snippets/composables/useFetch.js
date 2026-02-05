const useFetch = (url) => {
  const startFetch = async () => {
    const res = await fetch(url);
    const d = await res.text();
    return JSON.parse(d);  // Returning the data read from the server in JSON format
  }
  return [startFetch];
}

export default useFetch;