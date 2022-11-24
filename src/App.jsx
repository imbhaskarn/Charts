import { useState } from "react";
import axios from "axios";
import "./App.css";
import Form from "./components/Form";
function App() {
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
        console.log(res.data);
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      <div className="App">
        <Form
          handleSubmit={handleSubmit}
          values={values}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
