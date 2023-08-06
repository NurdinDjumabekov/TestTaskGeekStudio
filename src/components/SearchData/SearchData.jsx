import React, { useEffect } from "react";
import styles from "./SearchData.module.css";
import { useDispatch, useSelector } from "react-redux";
import loop from "../../assets/images/Auth/loop.svg";
import cross from "../../assets/images/search/crossss.svg";
import debounce from "lodash.debounce";
import { useLocation, useNavigate } from "react-router-dom";
import {
  changeClearSearchState,
  changeDataSearch,
  changeLookDataSearch,
} from "../../store/reducers/searchSlice";
import { toTakeAllDataForSort } from "../../store/reducers/typesSlice";

const SearchData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { dataSearch, clearSearchState, lookDataSearch } = useSelector(
    (state) => state.searchSlice
  );
  const { dataForSort } = useSelector((state) => state.typesSlice);

  useEffect(() => {
    dispatch(toTakeAllDataForSort());
  }, []);

  useEffect(() => {
    if (dataSearch === "") {
      dispatch(changeClearSearchState(false)); // для просмотра значка крестик
      dispatch(changeLookDataSearch(false)); // для просмотра данных поиска
    } else {
      dispatch(changeClearSearchState(true)); // для просмотра значка крестик
      dispatch(changeLookDataSearch(true)); // для просмотра данных поиска
    }
  }, [dataSearch]);

  const clickSearchData = (id) => {
    if (location.pathname.includes("detailed")) {
      navigate(`/`);
      setTimeout(() => {
        navigate(`/detailed/${id}`);
      }, 100);
    } else {
      navigate(`/detailed/${id}`);
    }
    dispatch(changeLookDataSearch(false));
    dispatch(changeDataSearch(""));
  };

  return (
    <form className={styles.searchData}>
      <label className={styles.searchData__label}>
        <div className={styles.loop}>
          <img src={loop} alt="loop" />
        </div>
        <input
          type="text"
          placeholder="Placeholder"
          onChange={(e) => dispatch(changeDataSearch(e.target.value))}
          onClick={() => setLookSearch(false)}
          value={dataSearch}
        />
        {lookDataSearch && (
          <label className={styles.selectSearch}>
            {dataForSort?.map((item) =>
              item.ru_name
                .toLocaleLowerCase()
                .includes(dataSearch.toLocaleLowerCase()) ? (
                <p key={item.id} onClick={() => clickSearchData(item.id)}>
                  {item.ru_name}
                </p>
              ) : (
                ""
              )
            )}
          </label>
        )}
        {clearSearchState && (
          <div
            className={styles.cross}
            onClick={() => dispatch(changeDataSearch(""))}
          >
            <img src={cross} alt="x" />
          </div>
        )}
      </label>
    </form>
  );
};

export default SearchData;
