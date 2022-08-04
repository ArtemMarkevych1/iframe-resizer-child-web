import React from "react";
import {LazyLoadImage as Avatar} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "./sticker-item.styles.scss"

export const StickerItem = ({sticker, onPage}) => {
    const {name, avatar, team, position, contact} = sticker;

    return (
        <div className="sticker-item">
            <figure className="figure">
                <div className="avatar">
                    <Avatar
                        alt="Avatar"
                        height={160}
                        src={avatar}
                        effect="blur"
                        placeholderSrc={avatar}
                    />
                    {!avatar ? (
                        <p className="placeholder">
                            <span>Blank image</span>
                        </p>
                    ) : null}
                </div>
            </figure>
            <p>{name}</p>
            <div className="info">
                {!onPage ? <p>{team}</p> : null}
                <p>{position}</p>
                <p>{contact}</p>
            </div>
        </div>
    );
};
