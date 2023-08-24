export const styleClearIcon = {
  width: "25px",
  height: "25px",
  color: "white",
  position: "absolute",
  right: "-15px",
  top: "-15px",
  borderRadius: "50%",
  background: "red",
  cursor: "pointer",
};
export const stylesParentBox = {
  height: "500px",
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
};

export const stylesChildBox = {
  borderRadius: "12px",
  margin: "20px",
  border: "5px solid",
  position: "relative",
  "&:first-of-type": {
    gridColumn: "1/3",
    gridRow: "1/3",
  },
};
