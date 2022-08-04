const getHoursFromLastSeen = (lastSeenDate) => {
  const currDate = new Date();
  return Math.abs(currDate - lastSeenDate) / 36e5;
};

export const isAllowedToOpen = (lastSeenDate) => {
  const hours = getHoursFromLastSeen(lastSeenDate);

  if (hours < 24) return false;
  return true;
};
