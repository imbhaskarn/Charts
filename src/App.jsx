import { useState } from "react";
import axios from "axios";
import "./App.css";
import { RequestProvider } from "./context/RequestContext";
import { FormProvider } from "./context/FormContext";
import Form from "./components/Form";
import Intensity from "./components/Intensity";
import Likelihood from "./components/Likelihood";
import Relevance from "./components/Relevance";
import TopicLikelihood from "./components/TopicLikelihood";
function App() {
  return (
    <>
      <div className="App">
        <FormProvider>
          <Form />
          <RequestProvider>
            <Intensity />
            <Likelihood />
            <Relevance />
            <TopicLikelihood/>
          </RequestProvider>
        </FormProvider>
      </div>
    </>
  );
}

export default App;
