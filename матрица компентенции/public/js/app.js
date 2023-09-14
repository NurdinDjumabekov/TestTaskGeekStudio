const root = document.getElementById("root");
// import url from "./data.json";

const url = "../data/data.json";

const createElement = (parent, tagName, text, className) => {
  const element = document.createElement(tagName);
  element.setAttribute("class", className);
  element.innerText = text;
  parent.appendChild(element);
};
const arrTopics = [];
const arrSubTopics = [];
const level = [];

const sendRequest = async () => {
  try {
    const response = await fetch(url);
    const obj = await response.json();
    console.log(obj);
    for (const i in obj) {
      arrTopics.push(i);
      arrSubTopics.push(obj?.[i]);
    }

    obj?.devs.forEach((item) => {
      console.log(item, "55");
      level.push(item);
    });

    console.log(arrTopics, "arrTopics");
    // console.log(arrSubTopics, "arrSubTopics");
    const divParent = document.createElement("div");
    arrTopics.forEach((item) => {
      divParent.setAttribute("class", "divParent");
      root.appendChild(divParent);
      createElement(divParent, "h3", item, "title");
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

sendRequest();
