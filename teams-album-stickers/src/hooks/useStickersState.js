import {useCallback, useEffect, useState} from "react";
import stickerSetService from "../services/sticker-set-service";
import teammateService from "../services/teammate-service";
import dateService from "../services/date-service";
import {canBeOpened} from "../utils";

export const useStickersState = () => {
    const [sets, setSets] = useState([]);
    const [teammates, setTeammates] = useState([]);

    const handler = useCallback(async () => {
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
                    sets = await stickerSetService.resetSeens();
                    teammates = await teammateService.resetSeens();
                    dateService.deleteDate();
                }
            }
            setSets(sets);
            setTeammates(teammates);
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        handler()
    }, [handler]);

    return {sets, setSets, teammates, setTeammates};
}
