import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Body from "./components/Home/Body";
import Nav from "./components/nav";
import Footer from "./components/footer";
function App() {
  const [i, setI] = useState(0), [isActive, setActive] = useState(false);

  //Define router below the nav
  return (
    <div style={{ width: "100%", height: "100%", }}>
      <Nav i={i} setI={setI} isActive={isActive} setActive={setActive} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
