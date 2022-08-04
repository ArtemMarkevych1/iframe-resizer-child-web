import React, { useMemo } from "react";
import styled from "styled-components";
import { StickerSetWrapper } from "./StickerSetWrapper";
import { useModals } from "../../hooks";
import { MODAL_TYPES } from "../../constants";
import { NextArrow, Button, ModalComponent } from "../../components";
import { filterSeenSets } from "../../utils";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 44%;
  height: calc(100vh - 40px);
  box-sizing: border-box;
  padding: 0 50px;
  border: 2px solid #b3b2b2;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

const Header = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: center;
  flex: 1;
  font-size: 7vw;
  font-weight: 500;
  line-height: 1.1;
  margin-top: 20vh;
`;

const Colored = styled.span`
  font-size: 6vw;
  color: #eb6d00;
`;

const SubHeader = styled.h2`
  font-size: 4vw;
  align-self: flex-end;
  justify-content: flex-end;
  margin-bottom: 3vh;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 28px;
`;

export const Home = ({ sets, setSets, setTeammates }) => {
  const [modalStack, openModal, closeModal] = useModals();
  const nonSeenSets = useMemo(() => filterSeenSets(sets), [sets]);

  return (
    <>
      <Main>
        <Header>
          <span>trendyol</span>
          <Colored>tech</Colored>
        </Header>
        <SubHeader>sticker album</SubHeader>
      </Main>
      <NextArrow to={"/2/webteam"} />
      {!!nonSeenSets.length && (
        <>
          <ButtonContainer>
            <Button
              text="GET YOUR DAILY STICKERS"
              onClick={() => openModal(MODAL_TYPES.SETS_MODAL)}
            />
          </ButtonContainer>
          <ModalComponent
            isOpen={modalStack[MODAL_TYPES.SETS_MODAL]}
            closeModal={() => closeModal(MODAL_TYPES.SETS_MODAL)}
          >
            <StickerSetWrapper
              nonSeenSets={nonSeenSets}
              setSets={setSets}
              setTeammates={setTeammates}
            />
          </ModalComponent>
        </>
      )}
    </>
  );
};
