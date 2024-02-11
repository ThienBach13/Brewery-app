import { useState, useEffect } from "react";
import { BreweryData } from "../misc/type";

const useFetchName = (name: string) => {
  const [data, setData] = useState<BreweryData[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.openbrewerydb.org/v1/breweries?by_name=${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(error.message);
        setIsLoading(false);
      });
  }, [name]);

  return { data, loading, error };
};

export default useFetchName;
