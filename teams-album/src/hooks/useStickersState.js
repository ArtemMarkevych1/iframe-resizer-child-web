import {useEffect, useState} from "react";
import stickerSetService from "../services/sticker-set-service";
import teammateService from "../services/teammate-service";
import dateService from "../services/date-service";
import {canBeOpened} from "../utils";

export const useStickersState = () => {
    const [sets, setSets] = useState([]);
    const [teammates, setTeammates] = useState([]);

    useEffect(async () => {
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
                if (date.length && canBeOpened(date[0].date)) {
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
    }, []);

    return {sets, setSets, teammates, setTeammates};
};
