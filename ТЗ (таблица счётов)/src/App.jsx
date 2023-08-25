import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  const arr = ["one", "two", "three", "four"];
  const objArr = [
    [{ hbbj: "sada" }, { asd: "sad" }, "1:3", "2:9", "4:5", "8:7"],
    [{ hbbj: "sada" }, { asd: "sad" }, "5:2", "6:8", "4:1", "4:2"],
    [{ hbbj: "sada" }, { asd: "sad" }, "6:4", "3:6", "4:2", "1:7"],
    [{ hbbj: "sada" }, { asd: "sad" }, "6:2", "2:0", "4:5", "8:5"],
  ];
  // console.log(objArr);

  // const transformArr = (arr, objArr) => {
  //   const newObjArr = [];
  //   objArr.forEach((i) => {
  //     newObjArr.push(i.slice(2, i.length));
  //   });
  //   console.log(newObjArr);
  //   const results = [];
  //   newObjArr.forEach((i) => {
  //     let n = -1;
  //     // console.log([i]);
  //     const aaa = [];
  //     i.forEach((j) => {
  //       n++;
  //       aaa.push([arr[n], j]);
  //     });
  //     results.push(Object.fromEntries(aaa));
  //   });
  //   // console.log(results, "results");
  //   return results;
  // };
  // console.log(transformArr(arr, objArr));
  // const nnn = { hbbj: "sada" };
  // console.log(Object.entries(nnn)[0]);

  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
