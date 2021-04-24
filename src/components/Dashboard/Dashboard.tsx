import React from 'react';
import {useQuery} from "@apollo/client";
import './Dashboard.css'
import {loader} from 'graphql.macro';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {renderLocaleNumber} from "../../utils/groupDigits";

const getGlobalSummary = loader('../../api/getGlobalSummary.graphql');


function Dashboard() {
	const {loading, data, error} = useQuery(getGlobalSummary)

	console.log(data)


	return (
			<>
				{loading ? <h1>Loading...</h1> :
						<div className="md:text-4xl">
							<div className="flex space-x-4 py-8">
								<div><h2 className="">Total Cases: {renderLocaleNumber(data?.getGlobalSummary?.global.TotalConfirmed)}</h2></div>
								<div className="flex space-x-2 text-red-500">
									<FontAwesomeIcon className="self-center" icon="angle-up"/>
									<h2>{renderLocaleNumber(data?.getGlobalSummary?.global.NewConfirmed)}</h2>
								</div>
							</div>

							<div className="flex space-x-4">
								<h2 className="">Total Deaths: {renderLocaleNumber(data?.getGlobalSummary?.global.TotalDeaths)}</h2>
								<div className="flex space-x-4 text-red-500">
									<FontAwesomeIcon className="self-center" icon="angle-up"/>
									<h2>{renderLocaleNumber(data?.getGlobalSummary?.global.NewDeaths)}</h2>
								</div>
							</div>
						</div>
				}
			</>
	);
}

export default Dashboard;