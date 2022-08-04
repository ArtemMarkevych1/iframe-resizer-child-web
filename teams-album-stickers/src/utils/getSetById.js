export const getSetById = (id, sets) => {
  return sets.filter((set) => set.id === id)[0];
};
