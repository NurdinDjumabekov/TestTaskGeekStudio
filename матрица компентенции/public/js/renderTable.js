// const renderTable = () => {
//   //   new w2grid({
//   //     name: "root",
//   //     box: "#root",
//   //     columns: newColumnsArr,
//   //     records: [
//   //       {
//   //         recid: 1,
//   //         start: "Вёрстка",
//   //         Intern: `
//   //               <h2>Разметка HTML</h2>
//   //               <i>что такое HTML
//   //               теги, атрибуты, значения
//   //               базовые элементы</i>
//   //               <h2>Основы CSS</h2>
//   //               <i>принцип работы CSS</i>
//   //               <h2>CSS-селекторы</h2>
//   //               <i>базовые селекторы (элементы, классы, ID)</i>
//   //               `,
//   //         Junior: `<h2>Разметка HTML</h2>
//   //               <i>что такое HTML
//   //               теги, атрибуты, значения
//   //               базовые элементы</i>
//   //               <h2>Основы CSS</h2>
//   //               <i>принцип работы CSS</i>
//   //               <h2>CSS-селекторы</h2>
//   //               <i>базовые селекторы (элементы, классы, ID)</i>
//   //               `,
//   //         JuniorPlus: `<h2>Разметка HTML</h2>
//   //               <i>что такое HTML
//   //               теги, атрибуты, значения
//   //               базовые элементы</i>
//   //               `,
//   //       },
//   //     ],
//   //   });
//   console.log("rtyguhijokp");
// };
// export default renderTable;

//  {
//           "subtitle": [
//             "что такое HTML",
//             "теги, атрибуты, значения",
//             "базовые элементы"
//           ]
//         },
//         {
//           "Селекторы": [
//             "принцип работы CSS",
//             "элементы, классы, ID",
//             "приоритет применения свойств (селектор, порядок правил свойств, правила атрибут, !important)"
//           ]
//         },
//         {
//           "Поведение элементов": [
//             "блочная модель: размеры, обводка, внешние и внутренние отступы, box-sizing",
//             "поток: блочные, строчные элементы",
//             "позиционирование: варианты position, offset parent, поведение left-right-top-bottom",
//             "z-index, контекст наложения, изоляция"
//           ]
//         },
//         {
//           "Построение лейаутов": ["flexbox", "grid", "table", "float", "block"]
//         },
//         {
//           "Figma": [
//             "выбор элемента",
//             "размеры и отступы",
//             "просмотр стилей элемента",
//             "экспорт ассетов"
//           ]
//         },
//         {
//           "Дополнительные возможности": [
//             "кастомные свойства (CSS-переменные)",
//             "адаптивность при помощи media queries"
//           ]
//         },
//         {
//           "Производительность вёрстки": ["оптимизация изображений", "(todo)"]
//         },
//         {
//           "SASS": [
//             "принцип работы SASS",
//             "отличие SASS и SCSS",
//             "вложенные стили",
//             "оператор &",
//             "переменные: объявление и использование",
//             "миксины: объявление и вызов",
//             "SCSS-модули",
//             "виды комментариев",
//             "переменные: область видимости",
//             "математические операции",
//             "операции со строками",
//             "логические операции",
//             "логические директивы",
//             "циклы, работа со списками",
//             "переменные: интерполяция",
//             "миксины: именованные аргументы",
//             "миксины: аргументы как список",
//             "операции с цветами",
//             "наследование",
//             "пользовательские функции"
//           ]
//         },
//         {
//           "SVG": [
//             "суть и синтаксис SVG",
//             "атрибуты и стили в SVG",
//             "варианты использования в вёрстке",
//             "заливка и обводка",
//             "цвета и прозрачность",
//             "бинарные данные в SVG",
//             "размеры, вьюбокс, масштабирование",
//             "размеры и позиция элементов",
//             "трансформации",
//             "внешние изображения (image)",
//             "фильтры",
//             "паттерны",
//             "анимации",
//             "обрезание контента (clipPath, mask)",
//             "объявления (defs)",
//             "градиенты",
//             "переиспользование (use)",
//             "symbol",
//             "текстовые данные в SVG",
//             "SVG-шрифты",
//             "rect, line",
//             "circle, ellipse",
//             "polygon, polyline",
//             "path",
//             "группирование"
//           ]
//         },
//         {
//           "CSS-анимации": ["transition", "animation"]
//         }

//         import { w2grid } from "https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js";
// const root = document.getElementById("root");

// const url = "../data/data.json";

// const renderTable = (obj, allLevel) => {
//   const renderArr = obj.info.map((i, ind) => {
//     const topics = i.titles.map((j) => {
//       const title = j.data.map((item) => {
//         let text = "";
//         item.filter((k, index) => {
//           if (index === 0) {
//             text += `<h2>${k}</h2>`;
//           } else {
//             text += `<i>${k}</i>`;
//           }
//         });
//         return text;
//       });
//       let newTitle = title.join();

//       return { [j.level]: newTitle };
//     });

//     const sortData = { recid: ind + 1, start: i.topic, ...openObj(topics) };
//     return sortData;
//   });

//   // console.log(addLevel(allLevel));

//   new w2grid({
//     name: "root",
//     box: "#root",
//     columns: addLevel(allLevel),
//     records: renderArr,
//   });
// };

// const addLevel = (allLevel) => {
//   const levelArr = [
//     {
//       level: "start",
//       name: "start",
//       frozen: false,
//     },
//   ];
//   for (const i of allLevel) {
//     levelArr.push({ level: i, name: i, frozen: false });
//   }
//   console.log(levelArr, "lA");
//   const newColumnsArr = levelArr?.map((i) => {
//     return {
//       field: i.level,
//       text: i.level,
//       size: i.level === "start" ? "150px" : "250px",
//       frozen: i.level === "start" ? "false" : "false",
//     };
//   });

//   return newColumnsArr;
// };
// // const columnsArr = [
// //   {
// //     level: "start",
// //     name: "start",
// //     frozen: false,
// //   },
// //   {
// //     level: "Intern",
// //     name: "Intern",
// //     frozen: false,
// //   },
// //   {
// //     level: "Junior",
// //     name: "Junior",
// //     frozen: false,
// //   },

// //   {
// //     level: "Junior+",
// //     name: "Junior1",
// //     frozen: false,
// //   },
// //   {
// //     level: "Junior++",
// //     name: "Junior2",
// //     frozen: false,
// //   },
// //   {
// //     level: "Strong Junior",
// //     name: "StrongJunior",
// //     frozen: false,
// //   },
// //   {
// //     level: "Strong Junior",
// //     name: "StrongJunior",
// //     frozen: false,
// //   },
// // ];

// const sendRequest = async () => {
//   try {
//     const response = await fetch(url);
//     const obj = await response.json();
//     renderTable(obj, obj.devs);
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

// sendRequest();

// const openObj = (topics = []) => {
//   const newObj = {};
//   for (const i of topics) {
//     Object.assign(newObj, i);
//   }
//   return newObj;
// };

//  "data": [
//             [
//               "Разметка",
//               "что такое HTML",
//               "теги, атрибуты, значения",
//               "базовые элементы",
//               "элементы разметки текста"
//             ],
//             [
//               "Селекторы",
//               "принцип работы CSS",
//               "элементы, классы, ID",
//               "приоритет применения свойств (селектор, порядок правил свойств, правила атрибут, !important)"
//             ],
//             [
//               "Поведение элементов",
//               "блочная модель: размеры, обводка, внешние и внутренние отступы, box-sizing",
//               "поток: блочные, строчные элементы",
//               "позиционирование: варианты position, offset parent, поведение left-right-top-bottom"
//             ],
//             ["Построение лейаутов", "flexbox"],
//             [
//               "Figma",
//               "выбор элемента",
//               "размеры и отступы",
//               "просмотр стилей элемента",
//               "экспорт ассетов"
//             ],
//             ["Дополнительные возможности", ""],
//             ["Производительность вёрстки", ""],
//             ["SASS", ""],
//             ["SVG", ""],
//             ["CSS-анимации", ""]
//           ]

//           ///////////////////////////////////
//            ["Разметка", "", "", "", "", ""],
//             ["Селекторы", "", "", "", "", ""],
//             ["Поведение элементов", "", "", "", "", ""],
//             ["Построение лейаутов", "", "", "", "", ""],
//             ["Figma", "", "", "", "", ""],
//             ["Дополнительные возможности", "", "", "", "", ""],
//             ["Производительность вёрстки", "", "", "", "", ""],
//             ["SASS", "", "", "", "", ""],
//             ["SVG", "", "", "", "", ""],
//             ["CSS-анимации", "", "", "", "", ""]
//             //////////////////////////////////////
//              "Intern", 0
//               "Junior", 1
//               "Junior+", 2
//               "Junior++", 3
//               "Strong Junior", 4
//               "Pre-Middle", 5
//               "Middle", 6
//               "Middle+",777777 -----
//               "Middle++",
//               "Strong Middle"
//             //////////////////////////////////////

//              {
//           "level": "Intern",
//           "data": [
//             ["Разметка", "", "", "", "", ""],
//             ["Селекторы", "", "", "", "", ""],
//             ["Поведение элементов", "", "", "", "", ""],
//             ["Построение лейаутов", "", "", "", "", ""],
//             ["Figma", "", "", "", "", ""],
//             ["Дополнительные возможности", "", "", "", "", ""],
//             ["Производительность вёрстки", "", "", "", "", ""],
//             ["SASS", "", "", "", "", ""],
//             ["SVG", "", "", "", "", ""],
//             ["CSS-анимации", "", "", "", "", ""]
//           ]
//         }
//          {
//           "level": "Strong Junior+",
//           "data": [
//             ["Типы данных", "", "", "", "", ""],
//             ["Переменные", "", "", "", "", ""],
//             ["Операторы", "", "", "", "", ""],
//             ["Условия", "", "", "", "", ""],
//             ["Циклы", "", "", "", "", ""],
//             ["Функции", "", "", "", "", ""],
//             ["Структуры данных", "", "", "", "", ""],
//             ["Регулярные выражения", "", "", "", "", ""],
//             ["JSON, YAML", "", "", "", "", ""]
//           ]
//         }
//         {
//           "level": "Intern",
//           "data": [
//             ["HTTP и браузер", "", "", "", "", ""],
//             ["Асинхронность", "", "", "", "", ""],
//             ["Обработка ошибок", "", "", "", "", ""],
//             ["События", "", "", "", "", ""],
//             ["JSON", "", "", "", "", ""],
//             ["Паттерны", "", "", "", "", ""],
//             ["Манипуляции с DOM", "", "", "", "", ""],
//             ["ООП", "", "", "", "", ""],
//             ["XML", "", "", "", "", ""],
//             ["Canvas", "", "", "", "", ""]
//           ]
//         },

//         //  [
//         //       "Функции",
//         //       "function expression и function declaration",
//         //       "стрелочные функции",
//         //       "аргументы по умолчанию",
//         //       "rest-оператор для аргументов",
//         //       "callback",
//         //       "HOF"
//         //     ],
//         //     [
//         //       "Структуры данных",
//         //       "массивы: индекс, длина, доступ к элементу",
//         //       "массивы: добавление/удаление элементов",
//         //       "массивы: поиск значения",
//         //       "массивы: фильтрация, map",
//         //       "массивы: slice ",
//         //       "массивы: splice ",
//         //       "объекты: ключ, доступ к элементу",
//         //       "объекты: порядок ключей ",
//         //       "spread-оператор",
//         //       "this в JS  (базовое понимание)"
//         //     ],
//         //     [
//         //       "Регулярные выражения",
//         //       "символы и интервалы (квадратные скобки)",
//         //       "группы (круглые скобки)",
//         //       "числовой квантификатор ({6})",
//         //       "начало и конец (^, $)",
//         //       "test"
//         //     ]

//         // {
// //           Intern: "background: red",
// //           Junior: "background: green",
// //           "Junior+": "background: yellow",
// //         },
////////////////////////////////////////////////////////////////////
const renderTable = (obj, allLevel) => {
  const renderArr = obj.info.map((i, ind) => {
    const topics = i.titles.map((j) => {
      const title = j.data.map((item) => {
        let text = "";
        item.filter((k, index) => {
          if (index === 0) {
            text += `<h2>${k}</h2>`;
          } else {
            // text += `<i>${k}</i>`;
            text += `<div class="evetyInput"><input type="checkbox" checked/><i>${k}</i></div>`;
            // text += `<div class="evetyInput"><i >${k}</i></div>`;
          }
        });
        return (text = "<div>" + text + "</div>");
      });
      let newTitle = title.join("");

      return {
        [j.level]: newTitle,
      };
    });

    const sortData = {
      recid: ind + 1,
      start: i.topic,
      ...openObj(topics),
      w2ui: {
        style: randomColor(allLevel),
      },
    };
    return sortData;
  });

  new w2grid({
    name: "root",
    box: "#root",
    columns: addLevel(allLevel),
    records: renderArr,
  });

  const tbody = document.querySelectorAll("tbody");
  const arrHeight = [];
  let index = 0;
  for (const i of tbody[1].children) {
    // console.log(i.offsetHeight);
    arrHeight.push(i.offsetHeight);
    i.style.height = `${arrHeight[index]}px`; // для того чтобы все столбцы были одного размера и чтобы при скрытии первых столбцовЮ другие не уменьшались!!!
    index++;
  }

  // console.log(arrHeight, "arrHeight");
  let count = 0;
  for (const i of tbody[0]?.children) {
    i.style.height = `${arrHeight[count]}px`;
    count++;
  }
  // const trTAG = tbody[3]?.children[0];
  // // console.log(trTAG.children);
  // for (const i of trTAG.children) {
  //   i.style.background = color();
  // }

  // console.log(tbody);
};
export default renderTable;
