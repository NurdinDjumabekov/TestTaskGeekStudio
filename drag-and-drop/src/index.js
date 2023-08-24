import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  onDragStart={() => dragStartHandler(card)} // срабатывает когда мы взяли карточку
//             onDrop={(e) => dropHandler(e, card)} // срабатывает когда мы выходим за пределы карточки
//             onDragOver={(e) => {
//               e.preventDefault();
//             }} // срабатывает когда мы отпускаем карточку
//             onDragEnd={(e) => {
//               e.preventDefault();
//             }} // срабатывает когда находимся над другим элементом
//             onDragLeave={(e) => {
//               e.preventDefault();
//             }} // когда мы отпускаем карточку
//             draggable={true}
//           >
