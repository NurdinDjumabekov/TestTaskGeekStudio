export const checkSortGenres = (dataForSort = [], sortDataGenres = []) => {
  if (sortDataGenres.length === 0) {
    return dataForSort;
  } else {
    const newArr = dataForSort?.filter((item) => {
      for (const i of sortDataGenres) {
        if (item?.genre.includes(i)) {
          return item;
        }
      }
    });
    return newArr;
  }
};
