import React from "react";
import {StickerItem} from "../../components";

import "./page-right-part.styles.scss"

export const PageRight = ({data}) => (
    <div className="page-right">
        {data.map((sticker) => {
            return (
                <div className="row" key={sticker.id}>
                    <StickerItem sticker={sticker} onPage={true}/>
                </div>
            );
        })}
    </div>
);
