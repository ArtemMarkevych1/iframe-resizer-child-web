import React, {useState} from "react";
import data from "../../mocks/data.json"
import ChipItem from "../chip-item/chip-item.component";

function ChipsFilter() {
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div>
            {data.map((el, index) => {
                return (
                    <ChipItem key={index}
                              label={el.country_name}
                              handleClick={() => {
                                  console.log(index)
                              }}
                              index={index}
                    />
                )
            })}
        </div>
    );
}

export default ChipsFilter;
