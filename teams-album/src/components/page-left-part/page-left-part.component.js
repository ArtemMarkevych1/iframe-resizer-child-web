import React from "react";
import {StickerItem} from "../../components";

import "./page-left-part.styles.scss"

export const PageLeft = ({data}) => (
    <div className="page-left">
        <div className="row">
            {data.slice(0, 5).map((item) => <StickerItem key={item.id} sticker={item} onPage={true}/>)}
        </div>
    </div>
);
