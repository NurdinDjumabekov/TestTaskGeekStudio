import React, { useState } from "react";
import "./app.css";
import Drag from "./Drag/Drag";

function App() {
  const [cardList, setCardList] = useState([
    { id: 1, url: "" },
    { id: 2, url: "" },
    { id: 3, url: "" },
    { id: 4, url: "" },
    { id: 5, url: "" },
    { id: 6, url: "" },
    { id: 7, url: "" },
    { id: 8, url: "" },
    { id: 9, url: "" },
  ]);
  return <Drag cardList={cardList} setCardList={setCardList} />;
}

export default App;
