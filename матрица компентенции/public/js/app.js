import { w2grid } from "https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js";
const root = document.getElementById("root");

const url = "../data/data.json";

function printKeys(obj) {
  // for (const key in obj) {
  //   console.log(key);
  //   if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
  //     printKeys(obj[key]); // Рекурсивный вызов для вложенных объектов
  //     console.log("////////////////////////");
  //   }
  // }
}

const renderTable = (obj, arrTopics, arrSubTopics) => {
  let count = 0;
  console.log(obj.devs, "tgyhuj");
  const data = arrTopics.map(
    (i, ind) => (
      console.log(i),
      count++,
      {
        recid: ind + 1,
        start: i,
        [obj.devs[count]]: outputTopic(obj[i]),
      }
    )
  );

  console.log(data, "data");
  // console.log(arrTopics, "arrTopics");
  new w2grid({
    name: "root",
    box: "#root",
    columns: newColumnsArr,
    records: data,
    // records: [
    //   {
    //     recid: 1,
    //     start: "Вёрстка",
    //     Intern: `
    //           <h2>Разметка HTML</h2>
    //           <i>что такое HTML
    //           теги, атрибуты, значения
    //           базовые элементы</i>
    //           <h2>Основы CSS</h2>
    //           <i>принцип работы CSS</i>
    //           <h2>CSS-селекторы</h2>
    //           <i>базовые селекторы (элементы, классы, ID)</i>
    //           `,
    //     Junior: `<h2>Разметка HTML</h2>
    //           <i>что такое HTML
    //           теги, атрибуты, значения
    //           базовые элементы</i>
    //           <h2>Основы CSS</h2>
    //           <i>принцип работы CSS</i>
    //           <h2>CSS-селекторы</h2>
    //           <i>базовые селекторы (элементы, классы, ID)</i>
    //           `,
    //     JuniorPlus: `<h2>Разметка HTML</h2>
    //           <i>что такое HTML
    //           теги, атрибуты, значения
    //           базовые элементы</i>
    //           `,
    //   },
    //   // {
    //   //   recid: 2,
    //   //   start: "Основы JavaScript",
    //   //   Intern: `
    //   //         <h2>Разметка HTML</h2>
    //   //         <i>что такое HTML
    //   //         теги, атрибуты, значения
    //   //         базовые элементы</i>
    //   //         <h2>Основы CSS</h2>
    //   //         <i>принцип работы CSS</i>
    //   //         <h2>CSS-селекторы</h2>
    //   //         <i>базовые селекторы (элементы, классы, ID)</i>
    //   //         `,
    //   // },
    //   // {
    //   //   recid: 3,
    //   //   start: "HTTP, DOM, архитектура",
    //   // },
    // ],
  });
  // console.log(arrTopics, arrSubTopics);
};

const columnsArr = [
  {
    level: "start",
    name: "start",
  },
  {
    level: "Intern",
    name: "Intern",
  },
  {
    level: "Junior",
    name: "Junior",
  },

  {
    level: "Junior+",
    name: "Junior1",
  },
  {
    level: "Junior++",
    name: "Junior2",
  },
  {
    level: "Strong Junior",
    name: "StrongJunior",
  },
  {
    level: "Strong Junior",
    name: "StrongJunior",
  },
];

const sendRequest = async () => {
  const arrTopics = [];
  const arrSubTopics = [];
  try {
    const response = await fetch(url);
    const obj = await response.json();
    console.log(obj);
    for (const i in obj) {
      arrTopics.push(i);
      arrSubTopics.push(obj?.[i]);
    }
    printKeys(obj);

    renderTable(obj, arrTopics, arrSubTopics);
  } catch (err) {
    console.error("Error:", err);
  }
};

const newColumnsArr = columnsArr.map((i) => ({
  field: i.level,
  text: i.level,
  size: i.level === "start" ? "150px" : "250px",
}));

sendRequest();

const outputTopic = (topic) => {
  // console.log(topic, "ftyguhk");
  let text = "";
  for (const key in topic) {
    console.log(key);
    text += `<h2>${key}</h2>`;
  }
  return text;
};
