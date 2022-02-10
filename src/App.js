import Counter from "./Counter";
import Formulaire from "./Formulaire";
import { React, useState } from "react";
import Api from "./Api";

function App() {
  return (
    <section>
      <h1 align="center">THOMAS LE MAXI BG</h1>
      <Counter />
      <Formulaire />
      <Api />
    </section>
  );
}

export default App;
