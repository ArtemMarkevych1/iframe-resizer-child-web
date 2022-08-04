import { db } from "../db";
import { teammates } from "../db/initialData/teammates";

class TeammateService {
  constructor(localbase) {
    this.db = localbase;
    this.teammates = teammates;
  }

  async addTeammates() {
    this.teammates.forEach((teammate) => {
      this.db.collection("teammates").add(teammate);
    });
  }

  getAll() {
    return this.db.collection("teammates").get();
  }

  addAvatar(stickers) {
    return Promise.all(
      stickers.map((sticker) => {
        return this.db.collection("teammates").doc({ id: sticker.id }).update({
          avatar: sticker.avatar,
        });
      })
    );
  }

  async updateAllAsUnSeen() {
    const { data } = await this.db.collection("teammates").set(this.teammates);
    return data;
  }
}

export default new TeammateService(db, teammates);
