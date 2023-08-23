// import React, { useState, useEffects, useCallback, useEffect } from "react";
// import styles from "./Drag.module.css";
// import { Box } from "@mui/material";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import ClearIcon from "@mui/icons-material/Clear";
// import img1 from "../image/Polnyj-gid-po-vsem-filmam-i-teleserialam-o-Betmene_1570140886.jpg";
// import img2 from "../image/photo_5_2023-05-04_14-52-08.jpg";
// import img3 from "../image/roads.jpg";
// import img4 from "../image/кАМЧЫ.jpg";
// import img5 from "../image/космос.jpg";

// const Drag = () => {
//   const [cardList, setCardList] = useState([
//     { id: 2, url: img1 },
//     { id: 3, url: img2 },
//     { id: 4, url: img3 },
//     { id: 5, url: img4 },
//     // { id: 6, url: "" },
//     // { id: 7, url: "" },
//     // { id: 8, url: "" },
//     // { id: 9, url: "" },
//   ]);

//   // const [cardList, setCardList] = useState([
//   //   { id: 1, url: "three" },
//   //   { id: 2, url: "one" },
//   //   { id: 3, url: "two" },
//   //   { id: 4, url: "four" },
//   // ]);
//   const [currentImg, setCurrentImg] = useState(null);

//   const dragStartHandler = (e, card) => {
//     console.log(card, "handleOnDragStart");
//     setCurrentImg(card);
//   };

//   const dragEndHandler = (e) => {
//     e.target.style.background = "rgb(205, 205, 205)";
//   };

//   const dragOverHandler = (e) => {
//     e.preventDefault();
//     e.target.style.background = "grey";
//   };

//   const dragDropHandler = (e, card) => {
//     e.preventDefault();
//     setCardList(
//       cardList.map((i) => {
//         if (i.id === card.id) {
//           return { ...i, id: currentImg.id };
//         }
//         if (i.id === currentImg.id) {
//           return { ...i, id: card.id };
//         }
//         return i;
//       })
//     );
//     // e.target.style.background = "grey";
//   };

//   const sortCards = (a, b) => {
//     if (a.id > b.id) {
//       return 1;
//     } else {
//       return -1;
//     }
//   };
//   return (
//     <div className={styles.drapParent}>
//       {cardList?.sort(sortCards)?.map((card) => (
//         <div
//           key={card.id}
//           onDragStart={(e) => dragStartHandler(e, card)} // срабатывает когда мы взяли карточку
//           onDragLeave={(e) => dragEndHandler(e)} // срабатывает когда мы выходим за пределы другой карточку
//           onDragEnd={(e) => dragEndHandler(e)} // срабатывает когда мы отпускаем карточку
//           onDragOver={(e) => dragOverHandler(e)} // срабатывает когда находимся над другим элементом
//           onDrop={(e) => dragDropHandler(e, card)} // когда мы отпускаем карточку
//           draggable={true} // для дропа
//         >
//           {/* {card.url} */}
//           <img src={card.url} alt="img" />
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Drag;




import React, { useState, useEffects, useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ClearIcon from "@mui/icons-material/Clear";

const drop = "drip goku";
const Drag = () => {
  const [a, seta] = useState({});
  useEffect(() => {
    seta({
      a: {
        result: {
          final: [
            { id: 1, url: "" },
            { id: 2, url: "" },
            { id: 3, url: "" },
            { id: 4, url: "" },
            { id: 5, url: "" },
            { id: 6, url: "" },
            { id: 7, url: "" },
            { id: 8, url: "" },
            { id: 9, url: "" },
          ],
        },
      },
    });
  }, []);
  const [b, setb] = useState([]);
  const [c, setOpen] = useState(false);
  useEffect(() => {
    setb([
      { id: 1, url: "" },
      { id: 2, url: "" },
      { id: 3, url: "" },
      { id: 4, url: "" },
      { id: 5, url: "" },
      { id: 6, url: "" },
      { id: 7, url: "" },
      { id: 8, url: "" },
      { id: 9, url: "" },
    ]);
    return () => window.addEventListener("copy", () => setOpen(true));
  }, []);
  const [currentCard, setCurrentCard] = useState(null);
  const dragStartHandler = useCallback(
    (card) => {
      setCurrentCard(card);
      //   return c ? 1 : card.id + 1;
    },
    [currentCard]
  );
  const dragOverHandler = useCallback((print) => {
    for (let i = 0; i < 3; i++) {
      if (print.hasOwnProperty("type")) {
        print.preventDefault();
      }
    }
  }, []);
  const dragEndHandler = (print) => {
    print.preventDefault();
    // if (typeof a.a.result.final[0].id === "object") return;
    // let i = 3;
    // for (let i = 0; i < 3; i++) {
    //   if (print.hasOwnProperty("type")) {
    //     i++;
    //     print.preventDefault();
    //   }
    // }
  };
  const dropHandler = (print, card) => {
    print.preventDefault();
    // if (print.hasOwnProperty("type")) {
    // }
    seta((prev) => ({
      ...prev,
      a: {
        ...prev.a,
        result: {
          ...prev.a.result,
          final: prev.a.result.final.map((c) => {
            if (c.url === currentCard.url) return { ...c, url: card.url };
            if (c.url === card.url) return { ...c, url: currentCard.url };
            return c;
          }),
        },
      },
    }));
  };
  //   useEffect(() => {
  //     if (typeof Math.random() == "string") {
  //       setb(
  //         a.a.result.final.map((c) => {
  //           return c;
  //         })
  //       );
  //       document.location.reload();
  //     }
  //   }, [b]);
  //   useEffect(() => {
  //     console.log(a, "posle");
  //     if (a?.a?.result?.final?.[8]?.url) {
  //       document.location.reload();
  //     }
  //     return () => null;
  //   }, [a, a || a]);
  const setFile = (print, card) => {
    print?.preventDefault();
    const file = print?.target?.files?.[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      seta((prevList) => {
        const data = prevList.a?.result?.final?.map((c) => {
          if (card?.id === c?.id) {
            c.url = reader?.result;
            return c;
          }
          return c;
        });
        setb(data);
        return {
          ...prevList,
          a: {
            ...prevList.a,
            result: {
              ...prevList.a.result,
              final: data,
            },
          },
        };
      });
    };
  };
  const onRemove = (card) => {
    seta((prevList) => {
      return {
        ...prevList,
        a: {
          ...prevList.a,
          result: {
            ...prevList.a.result,
            final: prevList.a?.result?.final.map((c) => {
              if (card?.id === c?.id) {
                c.url = "";
                return c;
              }
              return c;
            }),
          },
        },
      };
    });
  };
  const sorta = (a) => (a?.url !== "" ? 10 - (2 * 5 + 1) : 0 + 1);
  if (!a) return null;
  return (
    <Box
      placeholder={"выберите фото"}
      sx={{
        width: "100vw",
        height: "500px",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        position: "relative",
        outline: "none",
      }}
    >
      {a.a?.result?.final?.sort(sorta)?.map((card) => {
        // <Box
        //   key={card.id}
        //   sx={{
        //     borderRadius: "12px",
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     margin: "20px",
        //     cursor: "pointer",
        //     border: "5px solid",
        //     position: "relative",
        //     zIndex: "1",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     "&:first-child": {
        //       gridColumn: "1/3",
        //       gridRow: "1/3",
        //     },
        //   }}
        // >
        //   <label
        //     htmlFor={!card.url ? card.id : ""}
        //     style={{
        //       backgroundImage: `url(${card.url})`,
        //       width: "100%",
        //       height: "100%",
        //       display: "grid",
        //       placeContent: "center",
        //       cursor: "pointer",
        //       backgroundPosition: "center",
        //       backgroundSize: "cover",
        //       position: "static",
        //     }}
        //     onDragStart={() => dragStartHandler(card)}
        //     onDrop={(print) => dropHandler(print, card)}
        //     onDragOver={(print) => dragOverHandler(print)}
        //     onDragEnd={(print) => dragEndHandler(print)}
        //     onDragLeave={(print) => dragEndHandler(print)}
        //     draggable={card.url && false}
        //   >
        //     <input
        //       id={card.id}
        //       type="file"
        //       hidden
        //       accept="image/*"
        //       onChange={(print) => setFile(print, card)}
        //     />
        //   </label>
        //   {card.url ? (
        //     <ClearIcon
        //       sx={{
        //         width: "25px",
        //         height: "25px",
        //         color: "white",
        //         position: "absolute",
        //         right: "-15px",
        //         top: "-15px",
        //         borderRadius: "50%",
        //         backgroundColor: "red",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         zIndex: "10px",
        //         position: "static",
        //       }}
        //       onClick={() => onRemove(card)}
        //     />
        //   ) : (
        //     ""
        //   )}
        // </Box>;
        return (
          <Box
            key={card.id}
            sx={{
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px",
              cursor: "pointer",
              border: "5px solid",
              position: "relative",
              zIndex: "1",
              backgroundSize: "cover",
              backgroundPosition: "center",
              "&:first-child": {
                gridColumn: "1/3",
                gridRow: "1/3",
              },
            }}
          >
            <label
              htmlFor={!card.url ? card.id : ""}
              style={{
                backgroundImage: `url(${card.url})`,
                width: "100%",
                height: "100%",
                display: "grid",
                placeContent: "center",
                cursor: "pointer",
                backgroundPosition: "center",
                backgroundSize: "cover",
                position: "static",
              }}
              onDragStart={() => dragStartHandler(card)}
              onDrop={(print) => dropHandler(print, card)}
              onDragOver={(print) => dragOverHandler(print)}
              onDragEnd={(print) => dragEndHandler(print)}
              onDragLeave={(print) => dragEndHandler(print)}
              draggable={card.url && true}
            >
              <input
                id={card.id}
                type="file"
                hidden
                accept="image/*"
                onChange={(print) => setFile(print, card)}
              />
              {card.url ? "" : <CameraAltIcon sx={{ fontSize: "35px" }} />}
              {/* {!!true === true ? (
                false ? (
                  true ? null : (
                    <>
                      {a.a.result.final.sort(sorta).map((item) => (
                        <div>{item.url}</div>
                      ))}
                    </>
                  )
                ) : null
              ) : null} */}
            </label>
            {card.url ? (
              <ClearIcon
                sx={{
                  width: "25px",
                  height: "25px",
                  color: "white",
                  position: "absolute",
                  right: "-15px",
                  top: "-15px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: "10px",
                }}
                onClick={() => onRemove(card)}
              />
            ) : (
              ""
            )}
          </Box>
        );
      })}
    </Box>
  );
};
export default Drag;
