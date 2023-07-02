import React from 'react';

export default function useDimensions() {
	const [dimensions, setDimensions] = React.useState({
		width: typeof window === 'undefined' ? null : window.innerWidth,
		height: typeof window === 'undefined' ? null : window.innerHeight,
	});
	React.useEffect(() => {
		if (typeof window !== 'undefined')
			window.onresize = function () {
				setDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};
	});
	return dimensions;
}
