import "./App.scss";
import Landing from "./components/pages/Landing/Landing";
import SubscribeForm from "./components/pages/SubscribeForm/SubscribeForm";

function App() {
  return (
    <div className="container">
      <Landing />
      <SubscribeForm />
    </div>
  );
}

export default App;
