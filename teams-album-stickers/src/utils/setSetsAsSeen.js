export const setSetsAsSeen = (setId, sets) => {
  return sets.map((set) => {
    if (set.id === setId) {
      set.seen = true;
    }
    return set;
  });
};
