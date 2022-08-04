import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styled from "styled-components";

export const Container = styled.div`
  width: 190px;
  margin: 0 15px;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 176px;
  border: 2px solid #b3b2b2;
  padding: 26px 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  box-shadow: 3px 5px 11px #aaaaaa;
  transform-origin: 0% 50%;
  transition: all 0.4s ease;
  &:hover {
    transform: rotateY(-10deg);
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const Placeholder = styled.p`
  position: absolute;
  margin-bottom: 20px;
  max-width: 50px;
  text-transform: uppercase;
`;

export const Figure = styled.figure`
  background-color: white;
  perspective: 1400px;
  position: relative;
`;

export const Info = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StickerItem = ({ sticker, onPage }) => {
    const { name, avatar, team, position, contact } = sticker;

    return (
        <Container>
            <Figure>
                <Avatar>
                    <LazyLoadImage
                        alt="Avatar"
                        height={160}
                        src={avatar}
                        effect="blur"
                        placeholderSrc={avatar}
                    />
                    {!avatar && (
                        <Placeholder>
                            <span>Blank image</span>
                        </Placeholder>
                    )}
                </Avatar>
            </Figure>
            <p>{name}</p>
            <Info>
                {!onPage && <p>{team}</p>}
                <p>{position}</p>
                <p>{contact}</p>
            </Info>
        </Container>
    );
};
