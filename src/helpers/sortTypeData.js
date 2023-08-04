export const sortTypeData = (dataForSort = [], sortDataGenres = []) => {
  if (sortDataGenres.length === 0) {
    return dataForSort;
  } else {
    const newArr = dataForSort?.filter((item) => {
      for (const i of sortDataGenres) {
        if (item?.type === i) {
          return item;
        }
      }
    });
    return newArr;
  }
};
