import React, { useState } from "react";

export const LoadingContext = React.createContext();

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  function load() {
    setLoading(true);
  }
  function stopLoad() {
    setLoading(false);
  }
  return (
    <LoadingContext.Provider value={{ loading, load, stopLoad }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
