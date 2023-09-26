import { w2grid } from "https://rawgit.com/vitmalina/w2ui/master/dist/w2ui.es6.min.js";

const renderTables = (obj, allLevel, typeName, objCompare) => {
  const renderArr =
    typeName === "Admin"
      ? renderTableAdmin(obj, allLevel)
      : renderTableNurdin(obj, allLevel, objCompare);

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

const addLevel = (allLevel) => {
  const levelArr = [
    {
      level: "start",
      name: "start",
    },
  ];
  for (const i of allLevel) {
    levelArr?.push({
      level: i,
      name: i,
      frozen: false,
    });
  }

  // заполнение уровней для таблицы
  const newColumnsArr = levelArr?.map((i) => {
    return {
      field: i.level,
      text: i.level,
      size: i.level === "start" ? "150px" : "300px",
      frozen: i.level === "start" ? true : false,
      // w2ui: { style: "background-color: #f11e" },
    };
  });

  return newColumnsArr;
};

// для отправки запроса
const sendRequest = async (url, name) => {
  try {
    const response = await fetch(url);
    const compare = await fetch("../data/data.json");
    const obj = await response.json();
    const objCompare = await compare.json(); // для сравнения двух объектов
    if (name === "Admin") {
      renderTables(obj, obj.devs, name);
    } else if (name === "Nurdin") {
      renderTables(obj, obj.devs, name, objCompare);
    }
  } catch (err) {
    console.error(err);
  }
};

// для раскрытия вложенного объекта
const openObj = (topics = []) => {
  const newObj = {};
  for (const i of topics) {
    Object.assign(newObj, i);
  }
  return newObj;
};

// рандомные цвета и и добавление в определ нным столбцам
const color = () => {
  let num1 = Math.floor(Math.random() * 255) + 10;
  let num2 = Math.floor(Math.random() * 255) + 10;
  let num3 = Math.floor(Math.random() * 255) + 10;
  return `rgba(${num1},${num2},${num3},0.2)`;
};

const objStyle = {};
const randomColor = (allLevel) => {
  allLevel.filter((i) => {
    Object.assign(objStyle, {
      [i]: `background: ${color()}`,
      start: `background: ${color()}`,
    });
  });
  return objStyle;
};

window.addEventListener("load", sendRequest("../data/data.json", "Admin"));
// window.addEventListener("load", sendRequest("../data/nurdin.json", "Nurdin"));

const selectElement = document.getElementById("mySelect");
// sendRequest();
selectElement.addEventListener("change", () => {
  if (selectElement.value === "Admin") {
    sendRequest("../data/data.json", selectElement.value);
  } else if (selectElement.value === "Nurdin") {
    sendRequest("../data/nurdin.json", selectElement.value);
  }
});

const renderTableAdmin = (obj, allLevel) => {
  return obj.info.map((i, ind) => {
    const topics = i.titles.map((j) => {
      const title = j.data.map((item) => {
        let text = "";
        item.filter((k, index) => {
          if (index === 0) {
            text += `<h2>${k}</h2>`;
          } else {
            // text += `<div class="evetyInput"><input type="checkbox" checked/><i>${k}</i></div>`;
            text += `<div class="evetyInput"><i >${k}</i></div>`;
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
};

const renderTableNurdin = (obj, allLevel, objCompare) => {
  const arrAllTopics = [];
  obj.info.forEach((i) => {
    i.titles.forEach((j) => {
      j.data.forEach((n) => {
        n.forEach((m) => {
          arrAllTopics.push(m);
        });
      });
    });
  });
  return objCompare.info.map((i, ind) => {
    const topics = i.titles.map((j) => {
      const title = j.data.map((item) => {
        let text = "";
        item.filter((k, index) => {
          if (index === 0) {
            text += `<h2>${k}</h2>`;
          } else {
            if (arrAllTopics.includes(k)) {
              text += `<div class="evetyInput"><input type="checkbox" checked/><i>${k}</i></div>`;
            } else {
              text += `<div class="evetyInput"><input type="checkbox" /><i>${k}</i></div>`;
            }
          }
        });
        return (text = "<div>" + text + "</div>");
        // return text;
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
};
