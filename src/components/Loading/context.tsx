import React, { useContext, useState } from 'react';

const LoadingContext = React.createContext<{
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
}>({
  isLoading: false,
  setIsLoading: () => null
});

export const LoadingProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
