import { Navbar, Brand, CTA } from "./components";
import {
  Header,
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <di className="gradient__bg">
        <Navbar />
        <Header />
      </di>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
