import { createContext, useState } from "react";
import axios from "axios";
const FormContext = createContext(null)

export const FormProvider = ({children}) =>{
  const [apiRes, setApiRes] = useState([])
    const [values, setValues] = useState({
    country: "",
    end_year: "",
    pest: "",
    region: "",
    sector: "",
    source: "",
    topic: "",
    city: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/data", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setApiRes(res.data)
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
    return <FormContext.Provider value={{ handleSubmit, handleChange, values, apiRes }}>
        {children}
    </FormContext.Provider>
}

export default FormContext