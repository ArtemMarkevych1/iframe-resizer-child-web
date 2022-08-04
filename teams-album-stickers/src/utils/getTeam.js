export const getTeam = (teammates, team) => {
  return teammates.filter((teammate) => teammate.team === team);
};
