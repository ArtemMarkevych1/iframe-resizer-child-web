import React from "react";
// import {Child} from "../child";
import Styled from "./todoStyles";


// const sideScroll = (
//     element,
//     speed,
//     distance,
//     step
// ) => {
//     let scrollAmount = 0;
//     const slideTimer = setInterval(() => {
//         element.scrollLeft += step;
//         scrollAmount += Math.abs(step);
//         if (scrollAmount >= distance) {
//             clearInterval(slideTimer);
//         }
//     }, speed);
// };

export const Parent = () => {

    const contentWrapper = React.useRef(null)

    // const scroll = (scrollOffset) => {
    //     todoRef.current.scrollLeft += scrollOffset;
    // };

    return (
        <Styled.Container>
            <Styled.Title>Horizontal Scroll Buttons</Styled.Title>
            <Styled.ContentWrapper ref={contentWrapper}>
                {/*{photos.map((url, i) => (*/}
                {/*    <Styled.Content url={url} key={`img-${i}`} />*/}
                {/*))}*/}
            </Styled.ContentWrapper>

            <Styled.ButtonWrapper>
                <Styled.Button
                    onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, -10);
                    }}
                >
                    Left
                </Styled.Button>
                <Styled.Button
                    onClick={() => {
                        sideScroll(contentWrapper.current, 25, 100, 10);
                    }}
                >
                    Right
                </Styled.Button>
            </Styled.ButtonWrapper>
        </Styled.Container>
    );
}
