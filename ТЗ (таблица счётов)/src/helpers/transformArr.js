export const transformArr = (clubeNameColumns, objArr, clubeNameRow) => {
  const newObjArr = [];
  const results = [];
  objArr.forEach((i) => {
    newObjArr.push(i.slice(2, i.length));
  });
  let c = -1;
  newObjArr.forEach((i) => {
    c++;
    let count = -1;
    const newArr = [];
    i.forEach((j) => {
      count++;
      newArr.push([clubeNameColumns[count], j]);
      newArr.unshift(Object.entries(clubeNameRow[c])[0]); //  для обращения во вложенный объект
    });
    results.push(Object.fromEntries(newArr));
  });
  return results;
};
