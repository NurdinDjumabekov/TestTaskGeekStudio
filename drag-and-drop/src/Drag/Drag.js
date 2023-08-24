import React, { useState } from "react";
import { Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ClearIcon from "@mui/icons-material/Clear";
import { styleClearIcon, stylesChildBox, stylesParentBox } from "./styles";

const Drag = ({ cardList, setCardList }) => {
  const [currentCard, setCurrentCard] = useState(null);

  const epd = (e) => e.preventDefault();

  const dragStartHandler = (card) => {
    setCurrentCard(card);
    console.log("start");
  };

  const dropHandler = (e, card) => {
    e.preventDefault();
    if (card.url !== "") {
      setCardList(
        cardList.map((i) => {
          if (i.url === currentCard.url) return { ...i, url: card.url };
          if (i.url === card.url) return { ...i, url: currentCard.url };
          return i;
        })
      );
    }
  };

  const setFile = (e, card) => {
    e.preventDefault();
    const file = e?.target.files[0];
    const temporaryURL = URL?.createObjectURL(file);
    setCardList(
      cardList.map((c) => {
        if (card?.id === c.id) {
          c.url = temporaryURL;
          return c;
        }
        return c;
      })
    );
  };

  const onRemove = (card) => {
    setCardList(
      cardList.map((c) => {
        if (card.id === c.id) {
          c.url = "";
          return c;
        }
        return c;
      })
    );
  };

  const sortCardList = (i) => (i.url !== "" ? -1 : 1);

  return (
    <Box sx={stylesParentBox}>
      {cardList.sort(sortCardList).map((card) => {
        return (
          <Box sx={stylesChildBox} key={card.id}>
            <label
              style={{
                backgroundImage: `url(${card.url})`,
              }}
              className="imgBlock"
              onDragStart={() => dragStartHandler(card)}
              onDrop={(e) => dropHandler(e, card)}
              onDragOver={(e) => epd(e)}
              onDragEnd={(e) => epd(e)}
              onDragLeave={(e) => epd(e)}
              draggable={!!card.url}
              onDragEnter={(e) => epd(e)}
            >
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setFile(e, card)}
              />
              {card.url ? "" : <CameraAltIcon sx={{ fontSize: "35px" }} />}
            </label>
            {card.url ? (
              <ClearIcon sx={styleClearIcon} onClick={() => onRemove(card)} />
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
