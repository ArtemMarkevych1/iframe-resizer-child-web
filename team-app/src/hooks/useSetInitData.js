import { useState, useEffect } from "react";
import stickerSetService from "../services/StickerSetService";
import teammateService from "../services/TeammateService";
import dateService from "../services/DateService";
import { isAllowedToOpen } from "../utils";

export const useSetInitData = () => {
    const [sets, setSets] = useState([]);
    const [teammates, setTeammates] = useState([]);

    useEffect(() => {
        (async () => {
            let sets = [];
            let teammates = [];
            try {
                sets = await stickerSetService.getAll();
                teammates = await teammateService.getAll();
                if (!sets.length || !teammates.length) {
                    await stickerSetService.addStickerSets();
                    await teammateService.addTeammates();
                    sets = await stickerSetService.getAll();
                    teammates = await teammateService.getAll();
                } else {
                    const date = await dateService.getAll();
                    if (date.length && isAllowedToOpen(date[0].date)) {
                        sets = await stickerSetService.updateAllAsUnSeen();
                        teammates = await teammateService.updateAllAsUnSeen();
                        dateService.delete();
                    }
                }
                setSets(sets);
                setTeammates(teammates);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return { sets, setSets, teammates, setTeammates };
};
