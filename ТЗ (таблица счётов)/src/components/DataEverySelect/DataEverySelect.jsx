import React, { useEffect, useState } from "react";
import styles from "./DataEverySelect.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toTakeEveryDataSelects } from "../../store/reducers/innerSelectSlice";
import Table from "../Table/Table";
import TableScroll from "../TableScroll/TableScroll";

const DataEverySelect = ({ id }) => {
  const dispatch = useDispatch();
  const [typeTable, setTable] = useState(true);
  const { matchScore, resultScore } = useSelector(
    (state) => state.innerSelectSlice
  );
  console.log(resultScore, "resultScore");
  console.log(matchScore, "matchScore");
  useEffect(() => {
    dispatch(toTakeEveryDataSelects({ id, type: "matchScore" }));
    dispatch(toTakeEveryDataSelects({ id, type: "resultScore" }));
  }, []);
  return (
    <div className={styles.dataEverySelect}>
      <div className={styles.dataEverySelect__activeBtn}>
        <button
          className={typeTable ? styles.nowActive : ""}
          onClick={() => setTable(true)}
        >
          Таблица
        </button>
        <button
          className={typeTable === false ? styles.nowActive : ""}
          onClick={() => setTable(false)}
        >
          Шахматка
        </button>
      </div>
      <div>
        {typeTable ? (
          <Table matchScore={matchScore} resultScore={resultScore} />
        ) : (
          <TableScroll matchScore={matchScore} resultScore={resultScore} />
        )}
      </div>
    </div>
  );
};

export default DataEverySelect;
