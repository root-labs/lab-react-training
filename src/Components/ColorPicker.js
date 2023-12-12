import SingleColor from "./Color"
import React from 'react';

function RGBColorPicker()
{
	const bxStyle={
		width:'50px',
		height:'50px',
		display:'inline-block',
		border:'1px solid black',
	}
	const container={
		display:'flex',
		width:'200px',
		padding:'15px 20px',
		alignItems:'center',
	}
	const [rValue, setRValue]=React.useState(220)
	const [gValue, setGValue]=React.useState(150)
	const [bValue, setBValue]=React.useState(20)

	return ( 
	<div> 
		<div style={container}>
			<div style={{...bxStyle ,backgroundColor:'rgb('+rValue+',0,0)'}}></div>
			<SingleColor
			color="r"
			value={rValue}
			onChange={ (value) => { setRValue(value) } }
			/>
		</div>
		<div style={container}>
			<div style={{...bxStyle ,backgroundColor:'rgb(0,'+gValue+',0)'}}></div>
			<SingleColor
			color="g"
			value={gValue}
			onChange={ (value) => { setGValue(value) } }
			/>
		</div>
		<div style={container}>
			<div style={{...bxStyle ,backgroundColor:'rgb(0,0,'+bValue+')'}}></div>
			<SingleColor
			color="b"
			value={bValue}
			onChange={ (value) => { setBValue(value) } }
			/>
		</div>
		<div style={container}>
			<div style={{...bxStyle, backgroundColor:'rgb('+rValue+','+gValue+','+bValue+')'}}></div>
			<span>rgb({rValue},{gValue},{bValue})</span>
		</div>
	</div>
	);
}

export default RGBColorPicker