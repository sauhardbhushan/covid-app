import React from 'react';

export enum Dose {
	first = 'first',
	second ='second'
}

function PercentageDisplayer({ percent, dose }: { percent: number, dose: Dose }) {
	return (
			<>
			<text x="50%" y="50%" fill="#34D399" className="percentage-display percentage-display--percent">{ Math.round(percent) }%</text>
			<text x="50%" y="65%" fill="#34D399" className="percentage-display percentage-display--text">{ dose } doses administered</text>
			</>
	);
}

export default PercentageDisplayer;