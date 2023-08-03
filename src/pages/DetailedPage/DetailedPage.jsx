import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDetailedData } from "../../store/reducers/mainDataSlice";
import { NavLink, useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";
import { toTakeAllComments } from "../../store/reducers/commentSlice";
import AllComments from "../../components/comments/AllComments/AllComments";
import Preloader from "../../components/Preloader/Preloader";

const DetailedPage = () => {
  const { preloaderState, detailedData } = useSelector(
    (state) => state.mainDataSlice
  );
  const { lookBlockAddComment } = useSelector((state) => state.commentSlice);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(toTakeDetailedData(id));
    dispatch(toTakeAllComments(id));
  }, [lookBlockAddComment]);
  //   console.log(detailedData);
  return (
    <>
      {preloaderState ? (
        <div className={styles.detailed}>
          <div className="container">
            <div className={styles.detailed__inner}>
              <NavLink to={"/"}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.875 15.5588L0.275 8.86858C0.175 8.76721 0.104 8.6574 0.0619998 8.53914C0.0206665 8.42088 0 8.29417 0 8.15901C0 8.02386 0.0206665 7.89715 0.0619998 7.77889C0.104 7.66063 0.175 7.55081 0.275 7.44945L6.875 0.759261C7.05833 0.573422 7.28733 0.476111 7.562 0.467326C7.83733 0.459216 8.075 0.556528 8.275 0.759261C8.475 0.945099 8.57933 1.17723 8.588 1.45565C8.596 1.73474 8.5 1.97566 8.3 2.17839L3.4 7.14535H14.575C14.8583 7.14535 15.096 7.24232 15.288 7.43627C15.4793 7.63089 15.575 7.87181 15.575 8.15901C15.575 8.44622 15.4793 8.68679 15.288 8.88074C15.096 9.07537 14.8583 9.17268 14.575 9.17268H3.4L8.3 14.1396C8.48333 14.3255 8.57933 14.562 8.588 14.8492C8.596 15.1364 8.5 15.3729 8.3 15.5588C8.11667 15.7615 7.88333 15.8629 7.6 15.8629C7.31667 15.8629 7.075 15.7615 6.875 15.5588Z"
                    fill="#878787"
                  />
                </svg>
                Назад
              </NavLink>
              <div className={styles.detailed__mainInfo}>
                <div>
                  <img src={detailedData?.image} alt="картинка" />
                </div>
                <ul>
                  <li>
                    <h4>{detailedData?.ru_name}</h4>
                  </li>
                  <li>
                    Информация:
                    <p>{detailedData?.description}</p>
                  </li>
                  <li>
                    Тип:
                    <span> {detailedData?.type}</span>
                  </li>
                  <li>
                    Год:
                    <i> {detailedData?.issue_year}</i>
                  </li>
                  <li>
                    Жанр:
                    <b>
                      Юри,Повседневность, Постапокалиптика, Приключения,
                      Психология, Романтика, Сверхъестественное
                    </b>
                    {/* <b>{detailedData?.genre[0]}</b> */}
                  </li>
                </ul>
              </div>
              <div className={styles.line}></div>
              <div className={styles.detailed_moreInfo}>
                <h4>Синопсис</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                  Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                  Curabitur pellentesque nibh nibh, at maximus ante fermentum
                  sit amet. Pellentesque commodo lacus at sodales sodales.
                  Quisque sagittis orci ut diam condimentum, vel euismod erat
                  placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                  Praesent lorem orci, mattis non efficitur id, ultricies vel
                  nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel
                  tempor elit. Proin tempus, magna id scelerisque vestibulum,
                  nulla ex pharetra sapien, tempor posuere massa neque nec
                  felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
                  ullamcorper dui. Curabitur at risus sodales, tristique est id,
                  euismod justo. Mauris nec leo non libero sodales lobortis.
                  Quisque a neque pretium, dictum tellus vitae, euismod neque.
                  Nulla facilisi.
                </p>
              </div>
              <div className={styles.line}></div>
              <AllComments id={id} />
            </div>
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default DetailedPage;
