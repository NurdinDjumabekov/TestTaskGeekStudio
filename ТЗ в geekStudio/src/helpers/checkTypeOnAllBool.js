import { useDispatch } from "react-redux";
import { toTakeAllData } from "../store/reducers/mainDataSlice";
import { clearAlltypes } from "../store/reducers/typesSlice";

export const checkTypeOnAllBool = (type, arr = []) => {
  const dispatch = useDispatch();
  if (type === "typesdata") {
    const allBoolsAreFalse = arr.every((item) => item.bool === false);
    // if (allBoolsAreFalse) {
    //   dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
    // }
  } else if (type === "clearTypesData") {
    console.log("gfhjkl");
    console.log(arr);
    // const allBoolsAreFalse = arr.every((item) => item.bool === false);
    // if (!allBoolsAreFalse) {
    //   dispatch(clearAlltypes()); // очистка всех типов
    //   dispatch(toTakeAllData({ limit: 12, offset: 0 })); // для отображения всех данных
  }
};
