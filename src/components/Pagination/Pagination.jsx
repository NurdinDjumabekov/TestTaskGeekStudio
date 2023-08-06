import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import left_arrow from "../../assets/images/pagination/left_arrow.svg";
import right_arrow from "../../assets/images/pagination/rigth_arrow.svg";
import {
  changeOffset,
  changePaginationCards,
} from "../../store/reducers/mainDataSlice";
import { TransformationPages } from "../../helpers/transformationPages";

const Pagination = ({ allPage }) => {
  const dispatch = useDispatch();
  const { paginationCards, offset } = useSelector(
    (state) => state.mainDataSlice
  );
  // Вычисляем массив кнопок один раз при монтировании компонента
  const [pageArr, setPageArr] = useState(
    TransformationPages(
      Array.from({ length: allPage }, (_, i) => i + 1),
      paginationCards
    )
  );

  useEffect(() => {
    setPageArr(
      TransformationPages(
        Array.from({ length: allPage }, (_, i) => i + 1),
        paginationCards
      )
    );
  }, [allPage, paginationCards]);

  const increment = () => {
    if (paginationCards < allPage) {
      dispatch(changeOffset(offset + 12));
      dispatch(changePaginationCards(paginationCards + 1));
    }
  };

  const decrement = () => {
    if (paginationCards > 1) {
      dispatch(changeOffset(offset - 12));
      dispatch(changePaginationCards(paginationCards - 1));
    }
  };

  const nowClickNumPagination = (page) => {
    dispatch(changePaginationCards(page));
    if (paginationCards < page) {
      dispatch(changeOffset(offset + 12));
    } else {
      dispatch(changeOffset(offset - 12));
    }
  };

  return (
    <div className={styles.pagination_parentBlock}>
      <div className={styles.pagination_parentChild}>
        <button onClick={decrement}>
          <img src={left_arrow} alt="<" />
        </button>
        <div>
          {pageArr?.map((page) => (
            <button
              key={page}
              onClick={() => nowClickNumPagination(page)}
              className={page === paginationCards ? styles.active_btn : ""}
            >
              {page}
            </button>
          ))}
        </div>
        <button onClick={increment}>
          <img src={right_arrow} alt=">" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
