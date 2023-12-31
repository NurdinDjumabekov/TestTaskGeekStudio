import React from "react";
import styles from "./AllComments.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddComments from "../AddComments/AddComments";
import { changeLookBlockAddComment } from "../../../store/reducers/commentSlice";
const AllComments = ({ id }) => {
  const dispatch = useDispatch();
  const { allComments, lookBlockAddComment } = useSelector(
    (state) => state.commentSlice
  );

  const { nameUser } = useSelector((state) => state.authSlice);
  // console.log(allComments);
  return (
    <>
      <div className={styles.allCcomments}>
        <div className="container">
          <div className={styles.allCcomments__inner}>
            <div>
              <p>Топ комментарий</p>
              {nameUser !== "" ? (
                <button
                  onClick={() => dispatch(changeLookBlockAddComment(true))}
                >
                  добавить комментарий
                </button>
              ) : (
                ""
              )}
            </div>
            <ul>
              {allComments.length === 0 ? (
                <li className={styles.no_comment}>
                  <p>комментарий пока что нет!</p>
                </li>
              ) : (
                allComments?.map((comment) => (
                  <li key={comment.id}>
                    <div>
                      <img src={comment.user.image_file} alt="user" />
                    </div>
                    <div className={styles.line_vertical}></div>
                    <div>
                      <h5>{comment?.user.username}</h5>
                      <p>{comment.text}</p>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
      {lookBlockAddComment && <AddComments id={id} />}
    </>
  );
};

export default AllComments;
