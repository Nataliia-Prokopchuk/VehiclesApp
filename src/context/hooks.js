import { useContext } from "react";
import { UiDataContext, UiDispatchContext } from "./provider";

export const useUiSelector = (callback) => {
  const store = useContext(UiDataContext);

  return callback(store);
};

export const useUiDispatch = () => {
  const setStore = useContext(UiDispatchContext);

  return (field) => {
    setStore((store) => ({ ...store, ...field }));
  };
};
