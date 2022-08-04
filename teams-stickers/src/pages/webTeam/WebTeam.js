import React from "react";
import styled from "styled-components";
import { Heading } from "./Heading";
import { LeftPage } from "./LeftPage";
import { RightPage } from "./RightPage";
import { BackArrow, NextArrow } from "../../components";
import { WEB_TEAM_TEXT } from "../../constants";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 96%;
  @media (max-width: 1240px) {
    flex-wrap: wrap;
  }
`;

export const Col = styled.div`
  border: 2px solid #b3b2b2;
  padding: 20px 10px 10px;
  margin: 10px;
  flex-basis: 47%;
  max-width: 47%;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;

export const WebTeam = ({ data }) => {
    return (
        <>
            <Container>
                <Col>
                    <Heading
                        title="Web team"
                        subTitle="Blazing fast web"
                        text={WEB_TEAM_TEXT}
                    />
                    <LeftPage data={data.slice(0, 5)} />
                </Col>
                <Col>
                    <RightPage data={data.slice(5)} />
                </Col>
            </Container>
            <BackArrow to={"/"} />
            <NextArrow to={"/3/mobilewebteam"} />
        </>
    );
};
