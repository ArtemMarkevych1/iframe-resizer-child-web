import React from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const ButtonWrapper = styled.button`
  cursor: pointer;
  font-family: "Architects Daughter", cursive;
  font-size: ${({fontSize}) => fontSize || "1.4vw"};
  padding: 10px 20px;
  width: 100%;
  background-color: transparent;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #ededed;
    transition: 0.3s;
  }
`;

const useStyles = makeStyles((theme) => ({
    button: {
        cursor: "pointer",
        // fontFamily: "Architects Daughter\", cursive\"", // TODO remove ffamily
        fontSize: "1.5vw",
        padding: "10px 20px",
        width: "100%",
        backgroundColor: "transparent",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
        "&:hover": {
            backgroundColor: "#ededed",
            transition: "0.3s",
        }
    }
}))

export const SharedButton = ({text, onClick, fontSize}) => {
    const classes = useStyles()
    return (
        <Button onClick={onClick} className={classes.button}>
            {text}
        </Button>
    );
};
