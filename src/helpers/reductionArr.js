export const reductionMangaData = (arr = []) => {
  let newArr = [];
  if (arr.length <= 12) {
    return arr;
  } else {
    return (newArr = arr.slice(0, 12));
  }
};
