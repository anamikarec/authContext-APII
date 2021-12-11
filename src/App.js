import Body from "./Component/Body";
import Header from "./Component/Header";
import { Login } from "./Component/Login";
import './App.css'
export default function App() {
  return (
    <div className="App">
      <h2>React Auth Context</h2>
      <Header />
      <Body />
      <Login />
    </div>
  );
}
