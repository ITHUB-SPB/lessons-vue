import useFetch from "./useFetch";

const useFetchCountries = (url) => {
  const [startFetch] = useFetch(url);
  let countries;
  const startFetchCountries = async () => {
    const data = await startFetch();
    countries = data.map(function(elem) {
      return elem.name.common;  // Retain only the common.name property
    });
    countries = countries.sort((n1, n2) => (n1 > n2));  // In ascending alphabetical order
    return countries;
  }
  return [startFetchCountries];
}

export default useFetchCountries;