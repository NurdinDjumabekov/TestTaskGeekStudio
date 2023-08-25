import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cahngeAllSelects,
  toTakeAllSelectsData,
} from "../../store/reducers/mainPageSlice";
import EverySelect from "../../components/EverySelect/EverySelect";
import styles from "./MainPage.module.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const { allSelects } = useSelector((state) => state.mainPageSlice);
  useEffect(() => {
    dispatch(toTakeAllSelectsData());
  }, []);
  //   console.log(allSelects);
  return (
    <div className={styles.mainParent}>
      <div className="container">
        {allSelects?.map((data) => (
          <div key={data.id}>
            <EverySelect data={data} allSelects={allSelects} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
