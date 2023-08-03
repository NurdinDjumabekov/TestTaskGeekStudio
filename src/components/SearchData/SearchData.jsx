import React, { useEffect, useState } from "react";
import styles from "./SearchData.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeClearSearchState,
  changeDataSearch,
} from "../../store/reducers/mainDataSlice";

const SearchData = () => {
  const dispatch = useDispatch();
  const [lookSearch, setLookSearch] = useState(false);
  const { dataSearch, clearSearchState } = useSelector(
    (state) => state.mainDataSlice
  );
  useEffect(() => {
    if (dataSearch === "") {
      setLookSearch(true);
    } else {
      setLookSearch(false);
    }
    ///////////clear_btn/////////////
    if (dataSearch === "") {
      dispatch(changeClearSearchState(false));
    } else {
      dispatch(changeClearSearchState(true));
    }
  }, [dataSearch]);

  // useEffect(()=>{

  // },[])

  return (
    <form className={styles.searchData}>
      <label className={styles.searchData__label}>
        <input
          type="text"
          placeholder="Placeholder"
          onChange={(e) => dispatch(changeDataSearch(e.target.value))}
          onClick={() => setLookSearch(false)}
          value={dataSearch}
        />
        {clearSearchState && (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => dispatch(changeDataSearch(""))}
          >
            <path
              d="M5.46943 5.46972C5.76232 5.17683 6.23719 5.17683 6.53009 5.46972L8.99976 7.9394L11.4694 5.46973C11.7623 5.17684 12.2372 5.17684 12.5301 5.46973C12.823 5.76262 12.823 6.2375 12.5301 6.53039L10.0604 9.00006L12.5301 11.4697C12.823 11.7626 12.823 12.2375 12.5301 12.5304C12.2372 12.8233 11.7623 12.8233 11.4694 12.5304L8.99976 10.0607L6.53009 12.5304C6.2372 12.8233 5.76233 12.8233 5.46943 12.5304C5.17654 12.2375 5.17654 11.7626 5.46943 11.4697L7.9391 9.00006L5.46943 6.53038C5.17653 6.23749 5.17653 5.76262 5.46943 5.46972Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.31649 0.768819C7.40404 0.42374 10.5954 0.42374 13.683 0.768819C15.5094 0.972944 16.9843 2.41159 17.1991 4.24855C17.5683 7.40547 17.5683 10.5947 17.1991 13.7516C16.9843 15.5885 15.5094 17.0272 13.683 17.2313C10.5954 17.5764 7.40404 17.5764 4.31649 17.2313C2.49011 17.0272 1.01521 15.5885 0.80036 13.7516C0.43113 10.5947 0.43113 7.40547 0.80036 4.24855C1.01521 2.41159 2.49011 0.972944 4.31649 0.768819ZM13.5164 2.25954C10.5396 1.92683 7.45992 1.92683 4.4831 2.25954C3.33867 2.38744 2.42262 3.29069 2.29021 4.4228C1.93451 7.46395 1.93451 10.5362 2.29021 13.5773C2.42262 14.7094 3.33867 15.6127 4.4831 15.7406C7.45993 16.0733 10.5396 16.0733 13.5164 15.7406C14.6608 15.6127 15.5769 14.7094 15.7093 13.5773C16.065 10.5362 16.065 7.46395 15.7093 4.4228C15.5769 3.29069 14.6608 2.38744 13.5164 2.25954Z"
              fill="black"
            />
          </svg>
        )}
      </label>
      {/* {lookSearch && (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9 20.8L13.3 15.2C12.8 15.6 12.225 15.9167 11.575 16.15C10.925 16.3833 10.2333 16.5 9.5 16.5C7.68333 16.5 6.146 15.871 4.888 14.613C3.62933 13.3543 3 11.8167 3 10C3 8.18333 3.62933 6.64567 4.888 5.387C6.146 4.129 7.68333 3.5 9.5 3.5C11.3167 3.5 12.8543 4.129 14.113 5.387C15.371 6.64567 16 8.18333 16 10C16 10.7333 15.8833 11.425 15.65 12.075C15.4167 12.725 15.1 13.3 14.7 13.8L20.325 19.425C20.5083 19.6083 20.6 19.8333 20.6 20.1C20.6 20.3667 20.5 20.6 20.3 20.8C20.1167 20.9833 19.8833 21.075 19.6 21.075C19.3167 21.075 19.0833 20.9833 18.9 20.8ZM9.5 14.5C10.75 14.5 11.8127 14.0627 12.688 13.188C13.5627 12.3127 14 11.25 14 10C14 8.75 13.5627 7.68733 12.688 6.812C11.8127 5.93733 10.75 5.5 9.5 5.5C8.25 5.5 7.18733 5.93733 6.312 6.812C5.43733 7.68733 5 8.75 5 10C5 11.25 5.43733 12.3127 6.312 13.188C7.18733 14.0627 8.25 14.5 9.5 14.5Z"
            fill="black"
          />
        </svg>
      )} */}
    </form>
  );
};

export default SearchData;
