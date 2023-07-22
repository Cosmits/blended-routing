export function removeDuplicates(arr, prop) {
  const set = new Set();
  return arr.filter((item) => {
    if (!set.has(item[prop])) {
      set.add(item[prop]);
      return true;
    }
    return false;
  });
}