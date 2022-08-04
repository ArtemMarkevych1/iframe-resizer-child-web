export const setAvatar = (teammates, set) => {
  return teammates.map((teammate) => {
    const sticker = set.stickers.find((el) => el.id === teammate.id);
    if (sticker) {
      teammate.avatar = sticker.avatar;
    }
    return teammate;
  });
};
