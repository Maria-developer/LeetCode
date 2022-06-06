function mergeTwoLists (list1, list2) {
  const twoLists = list1.concat(list2);
  return twoLists.sort();
}

console.log(mergeTwoLists([1,2,4], [1,3,4]));