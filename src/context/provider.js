import { createContext, useState } from "react";

const store = {
  year: null,
  vehicle: null,
};

export const UiDataContext = createContext({});
export const UiDispatchContext = createContext({});

const UiContextProvider = ({ children }) => {
  const [state, setState] = useState(store);

  return (
    <UiDataContext.Provider value={state}>
      <UiDispatchContext.Provider value={setState}>
        {children}
      </UiDispatchContext.Provider>
    </UiDataContext.Provider>
  );
};

export default UiContextProvider;
