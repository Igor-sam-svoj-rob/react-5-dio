import Hero from "./components/Hero";
import Slider from "./components/Slider";
import beach1 from "./images/beach1.jpg";
import beach2 from "./images/beach2.jpg";
import beach3 from "./images/beach3.jpg";

import "./App.css";

function App() {
  return (
    <>
      <Hero image={beach1} />
      <Slider
        image={beach2}
        title={"Lorem ipsum"}
        subtitle={"Lorem ipsum dolor"}
      />
      <Slider
        image={beach3}
        title={"Lorem"}
        subtitle={"Lorem ipsum"}
        flip={true}
      />
    </>
  );
}

export default App;
