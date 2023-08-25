export const standartisationMainData = (arr = []) => {
  let newData = arr?.map((item) => {
    return {
      ...item,
      is_premier_league: false,
    };
  });
  return newData;
  // console.log(newData);
};
