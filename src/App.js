import logo from "./logo.svg";
import { ReactComponent as Logo } from "./assets/gredient.svg";
import { FormContainer } from "./containers/form";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Logo className="img__gradient" />
      <FormContainer />
    </div>
  );
}

export default App;
