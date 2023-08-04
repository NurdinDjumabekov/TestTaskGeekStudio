export const checkSortGenres = (allData = [], sortDataGenres = []) => {
  //   console.log(allData);
  //   console.log(sortDataGenres);
  const newArr = allData.map((item) => {
    // console.log(item.genre);
    return sortDataGenres.map((i) => {
      if (item.genre?.includes(i)) {
        return item;
      }
    });
  });
  return newArr;
};
