import { useState, useEffect } from "react";
import Form from "./Form";
import "./styles.css";

const initialJoke = "asdasd";
const App = () => {
  // const [joke, setJoke] = useState(initialJoke);
  // const [error, setError] = useState("");
  const [userInput, setUserInput] = useState("");

  /*
  useEffect(() => {
    async function getJoke() {
      setError("");
      try {
        const response = await fetch("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json"
          }
        });
        const responseJson = await response.json();
        const { joke } = responseJson;
        setJoke(joke);
      } catch (error) {
        setError("API NOT RESPONDING.");
      }
    }
    getJoke();
  }, []);
  */

  const resetFields = () => {
    setUserInput("");
  };

  const submit = () => {
    console.log({ userInput });
    resetFields();
  };

  useEffect(() => {
    console.log({ userInput });
  }, [userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <Form value={userInput} onChange={handleInputChange} submit={submit} />
    </div>
  );
};

export default App;
