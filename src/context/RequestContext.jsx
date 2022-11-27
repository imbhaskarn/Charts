import { createContext, useState, useContext } from "react";
import axios from "axios";
import FormContext from "./FormContext";
const RequestContext = createContext(null);

export const RequestProvider = ({ children }) => {
  const { values, apiRes } = useContext(FormContext);
  return (
    <RequestContext.Provider value={{apiRes}}>{children}</RequestContext.Provider>
  );
};

export default RequestContext;
