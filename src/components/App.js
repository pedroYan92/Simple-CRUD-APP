import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import api from "../service/base_URL";
import Footer from "./Footer";

function App() {
  const initialStateInputsForms = {
    name: "",
    email: "",
    number: "",
    address: "",
  };

  const [costumers, setCostumers] = useState([]);

  const [inputsForm, setInputsForm] = useState(initialStateInputsForms);

  const [TypeFormAction, setTypeFormAction] = useState("Create costumer");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (inputsForm.id !== undefined) {
        const { data: editedData } = await api.put(
          `/costumers/${inputsForm.id}`,
          inputsForm
        );
        setCostumers(
          costumers.map((item) =>
            item.id === editedData.id ? editedData : item
          )
        );
      } else {
        const { data: newData } = await api.post(`/costumers`, inputsForm);

        setCostumers([...costumers, newData]);
      }
      setTypeFormAction("Create costumer");
      setInputsForm(initialStateInputsForms);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get("/costumers");
        setCostumers(data);
      } catch (error) {
        window.alert(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>Simple CRUD App</h1>
      <div className="app-container">
        <Form
          setInputsForm={setInputsForm}
          inputsForm={inputsForm}
          TypeFormAction={TypeFormAction}
          setTypeFormAction={setTypeFormAction}
          handleSubmit={handleSubmit}
        />
        <Table
          setTypeFormAction={setTypeFormAction}
          inputsForm={inputsForm}
          setInputsForm={setInputsForm}
          costumers={costumers}
          setCostumers={setCostumers}
          initialStateInputsForms={initialStateInputsForms}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
