import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {loader} from "graphql.macro";
import './VaccinationsTracker.css'
import {renderLocaleNumber} from "../../utils/groupDigits";
import PercentageDisplayer, {Dose} from "./PercentageDisplayer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const getUKVaccinations = loader('../../api/getUKVaccinations.graphql');

function VaccinationsTracker() {
	const [isSecondDosesFocus, setIsSecondDosesFocus] = useState(false);
	const {loading, data, error} = useQuery(getUKVaccinations);

	const getPercentageArc = (percent: number) => {
		const circumference = 2 * Math.PI * 130
		return percent * circumference / 100
	}

	console.log(isSecondDosesFocus)

	return (
			<div>
				{loading ? <h1>Loading..</h1> :
						<div>
							<h3>Vaccination Tracker</h3>
							<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg" className="circleViewbox">
								<circle cx="150" cy="150" r="130" fill="transparent" stroke="#D1D5DB" strokeWidth="2"/>
								<circle cx="150" cy="150" r="130"
												strokeDasharray={getPercentageArc(data?.getUKVaccinations.firstDoses.cumulativePercentage) + ' 999'}
												fill="transparent" stroke="#34D399" strokeWidth="20" strokeLinecap="round"
								/>
								<PercentageDisplayer dose={isSecondDosesFocus ? Dose.second : Dose.first}
																		 percent={isSecondDosesFocus ?
																				 data?.getUKVaccinations.secondDoses.cumulativePercentage :
																				 data?.getUKVaccinations.firstDoses.cumulativePercentage}/>
								<circle cx="150" cy="150" r="130" className="tracker--first"
												strokeDasharray={getPercentageArc(data?.getUKVaccinations.secondDoses.cumulativePercentage) + ' 999'}
												fill="transparent" stroke="#065F46" strokeWidth="20" strokeLinecap="round"
												onMouseEnter={() => setIsSecondDosesFocus(true)}
												onMouseLeave={() => setIsSecondDosesFocus(false)}/>
							</svg>
							<div className="md:text-2xl">
									{renderLocaleNumber(data?.getUKVaccinations.firstDoses.cumulativeNumber)}
								<h3><FontAwesomeIcon className="self-center space-x-4" icon="angle-up"/>
									{renderLocaleNumber(data?.getUKVaccinations.firstDoses.data[0].newPeopleVaccinatedFirstDoseByPublishDate)}
								</h3>
								<h3>
									{renderLocaleNumber(data?.getUKVaccinations.secondDoses.cumulativeNumber)}
									<FontAwesomeIcon className="self-center space-x-4" icon="angle-up"/>
									{renderLocaleNumber(data?.getUKVaccinations.secondDoses.data[0].newPeopleVaccinatedSecondDoseByPublishDate)}
								</h3>
							</div>
						</div>}
			</div>
	);
}

export default VaccinationsTracker;