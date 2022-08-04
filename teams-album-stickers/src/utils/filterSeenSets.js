export const filterSeenSets = (sets) => {
  return sets.filter((set) => !set.seen);
};
