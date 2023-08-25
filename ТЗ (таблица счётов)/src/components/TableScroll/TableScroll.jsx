import React, { useEffect, useState } from "react";
import styles from "./TableScroll.module.css";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { transformArr } from "../../helpers/transformArr";

const TableScroll = ({ matchScore, resultScore }) => {
  const [clubeNameColumns, setClubeNameColumns] = useState([]);
  const [row, setRow] = useState([]);

  useEffect(() => {
    if (matchScore) {
      const newArr = matchScore.map((item) => ({
        key: item.team_name,
        name: item.team_name,
      })); // добавление name и title с названиями клубов для clubeNameColumns
      newArr.unshift({ key: "allRow", name: "Участники", frozen: true });
      setClubeNameColumns(newArr);
    }
  }, [matchScore]);

  useEffect(() => {
    if (resultScore) {
      const clubeNameRow = []; // allRow - name clube
      const arrScore = []; // name all clube для прохождения с помощью цикла
      const dataScoreWithOutClear = []; // данные всех счётов без очистки( а надо бы урать первые два элемента, они лишние)
      resultScore?.forEach((item) => {
        clubeNameRow.push({ allRow: item[0] });
        arrScore.push([item[0]]);
        dataScoreWithOutClear.push(item[1]);
      });
      setRow(transformArr(arrScore, dataScoreWithOutClear, clubeNameRow));
    }
  }, [resultScore]);

  return (
    <div className={styles.tableScroll}>
      <DataGrid
        // rowHeight={50}
        className="grid_role"
        columns={clubeNameColumns}
        rows={row}
      />
    </div>
  );
};
export default TableScroll;
