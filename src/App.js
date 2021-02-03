import { useState } from "react";
import "./App.css";
import Page from "./page";
import LoginScreen from "./loginScreen";

function App() {
  const [email, setEmail] = useState();
  return email ? <Page {...{ email }} /> : <LoginScreen {...{ setEmail }} />;
}

export default App;
