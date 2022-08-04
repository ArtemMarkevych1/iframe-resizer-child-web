import { db } from "../db";
import { stickersets } from "../db/initialData/stickersets";

class StickerSetService {
  constructor(localbase, stickersets) {
    this.db = localbase;
    this.stickersets = stickersets;
  }

  async addStickerSets() {
    this.stickersets.forEach((stickerset) => {
      this.db.collection("stickersets").add(stickerset);
    });
  }

  getAll() {
    return this.db.collection("stickersets").get();
  }

  markAsSeen(id) {
    this.db.collection("stickersets").doc({ id }).update({
      seen: true,
    });
  }

  async updateAllAsUnSeen() {
    const { data } = await this.db
      .collection("stickersets")
      .set(this.stickersets);
    return data;
  }
}

export default new StickerSetService(db, stickersets);
