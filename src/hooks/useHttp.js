import { useState, useCallback, useRef, useEffect, useContext } from 'react';

import axios from 'axios';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const activeHttpRequest = useRef([]);

  const baseUrl = 'http://localhost:5000/api/';

  const sendRequest = useCallback(async (url, method = 'get', body = null) => {
    setIsLoading(true);
    try {
      const response = await axios[method](baseUrl + url, body ? body : {}, {});
      const responseData = await response;
      setIsLoading(false);
      return responseData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  }, []);

  const clearError = () => setError(null);

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);
  return { isLoading, error, sendRequest, clearError, baseUrl };
};

export default useHttp;
