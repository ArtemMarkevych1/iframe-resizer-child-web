import React, {useRef} from "react";
import './parent.css'
import {Child} from "../child";

const arr = [1, 2, 3, 4]

export const Parent = () => {

	const propertiesListRef = useRef(null);

	// const scrollToRefObject = (ref: any) => window.scrollTo({
	//     top: ref.current.offsetTop + 1000,
	//     left: 0,
	//     behavior: 'smooth'
	// });

	const scrollToRefObject = (ref) => {
		console.log(ref.current)
		window.scrollTo({
			top: 1000,
			// top: ref.current.offsetLeft + 1000,
			left: ref.current.offsetLeft + 100,
			behavior: 'smooth'
		});
	}

	return (
		<div
			// ref={propertiesListRef}
		>
			<div style={{
				// height: '200vh',
				width: '150vw',
				border: '1px solid red'
			}}>
				<div style={{
					display: "flex", flexDirection: "row", justifyContent: "space-around",

				}}
						 ref={propertiesListRef}
				>
					{arr.map(el => (
						<div onClick={()=>scrollToRefObject(propertiesListRef)}>
							<Child item={el}/>
						</div>))}
				</div>

				{/*<button onClick={()=>scrollToRefObject(propertiesListRef)}>Click!</button>*/}
			</div>
		</div>

	)
}
