import { db } from "../db";

class DateService {
    constructor(localbase) {
        this.db = localbase;
    }

    async addDate() {
        const date = await this.getAll();
        if (!date.length) {
            this.db.collection("date").add({ id: 1, date: new Date() });
        }
    }

    getAll() {
        return this.db.collection("date").get();
    }

    delete() {
        return this.db.collection("date").doc({ id: 1 }).delete();
    }
}

export default new DateService(db);
