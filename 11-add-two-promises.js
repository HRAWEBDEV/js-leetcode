const addTwoPromises = async (...promises) => {
 const results = await Promise.all([...promises]);
 return results.reduce((acc, cur) => acc + cur, 0);
};
