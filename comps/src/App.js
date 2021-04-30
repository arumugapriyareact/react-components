import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import useOnClickOutside from "./useOnClickOutside";

function App() {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  useOnClickOutside(ref, () => setModalOpen(false));
  return (
    <div>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)}>Open Modal</button>
      )}
    </div>
  );
}

export default App;
