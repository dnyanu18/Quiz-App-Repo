/*import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((res) => setResponse(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, [url]);

  return { response, error, loading };
};

export default useAxios;
*/
import axios from "axios";
import { useEffect, useState } from "react";

// Set the base URL for axios
axios.defaults.baseURL = "https://opentdb.com";

const useAxios = ({ url }) => {
  const [response, setResponse] = useState(null); // Holds API response data
  const [error, setError] = useState(null); // Holds error information
  const [loading, setLoading] = useState(true); // Indicates loading state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading before fetching
      setError(null); // Reset error state

      try {
        const res = await axios.get(url); // Make API request
        setResponse(res.data); // Set the response data
      } catch (err) {
        setError(err.message || "An error occurred"); // Set error message
      } finally {
        setLoading(false); // End loading state
      }
    };

    if (url) fetchData(); // Call fetchData only if the URL exists
  }, [url]); // Dependency array to re-fetch if URL changes

  return { response, error, loading }; // Return response, error, and loading state
};

export default useAxios;
