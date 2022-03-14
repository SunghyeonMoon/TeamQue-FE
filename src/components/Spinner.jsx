import { useState } from 'react';
import { css } from '@emotion/react';
import ClockLoader from 'react-spinners/ScaleLoader';
import styled from 'styled-components';

// Can be a string as well. Need to ensure each key-value pair ends with ;

function Spinner() {
	let [loading, setLoading] = useState(true);
	let [color, setColor] = useState(' #CB94FB');

	return (
		<div
			className='sweet-loading'
			style={{ display: 'grid', placeItems: 'center', height: '70vh' }}
		>
			<ClockLoaderCustom
				color={color}
				loading={loading}
				css={override}
				size={50}
			/>
		</div>
	);
}

const override = css`
	display: block;
	margin: auto;
	border-color: #cb94fb;
`;
export default Spinner;

const ClockLoaderCustom = styled(ClockLoader)``;
