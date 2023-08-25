import React, { useEffect, useState } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import styles from "./Table.module.css";
import { transformArr } from "../../helpers/transformArr";

const Table = ({ matchScore }) => {
  const [rows, setRow] = useState([]);
  // console.log(data, "data");
  useEffect(() => {
    const dataGames = [];
    if (matchScore) {
      let c = 0;
      matchScore?.forEach((i) => {
        c++;
        dataGames.push({
          nums: c,
          title: i.team_name,
          И: i.games,
          В: i.wins,
          Н: i.draw,
          П: i.lose,
          signs: i.psm,
          score: i.psm_only,
        });

        // console.log(i);
      });
    }
    setRow(dataGames);
  }, [matchScore]);
  const columns = [
    { key: "nums", name: "#" },
    { key: "title", name: "Участники" },
    { key: "И", name: "И" },
    { key: "В", name: "B" },
    { key: "Н", name: "Н" },
    { key: "П", name: "П" },
    { key: "signs", name: "+/-" },
    { key: "score", name: "Очки" },
  ];

  return (
    <div className={styles.table}>
      <DataGrid  columns={columns} rows={rows} />
    </div>
  );
};
export default Table;
