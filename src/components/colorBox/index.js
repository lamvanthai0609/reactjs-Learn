import React, { useState } from 'react';
import './colorBox.scss';


const getRandomColor = () => {
	const colorList = ['red','green','blue','yellow'];
	const ramdomIndex = Math.trunc(Math.random()*5);
	return colorList[ramdomIndex];
}


function ColorBox() {
	
	const [color,setColor] = useState(()=>{
		const initColor = localStorage.getItem('box_color') || 'pink';
		return initColor;
	});
	const handleBoxClick = () => {
		const newColor = getRandomColor();
		setColor(newColor);
		localStorage.setItem('box_color',newColor);
	};
	return (
		<div 
			className='box_color'
			style={{backgroundColor:color}}
			onClick={handleBoxClick}>
			0o0ok
		</div>
	)
}

export default ColorBox;
