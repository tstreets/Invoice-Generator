import React from 'react';

export default function useDimensions() {
	const [dimensions, setDimensions] = React.useState({
		width: null,
		height: null,
	});
	React.useEffect(() => {
		window.onresize = function () {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
	});
	React.useEffect(() => {
		setDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}, []);
	return dimensions;
}
