import React from 'react';
import Dashboard from "../Dashboard/Dashboard";
import ReproductionRate from "../ReproductionRate/ReproductionRate";
import VaccinationsTracker from "../VaccinationsTracker/VaccinationsTracker";

function Home() {
	return (
			<>
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-5 grid-flow-rows md:gap-10 justify-items-center">
						<div className="md:col-start-2 md:col-span-3 md:text-5xl"><h1>UK Covid-19 Dashboard</h1></div>
						<div className="md:col-start-1 md:row-start-2 md:row-span-1 ">
							<ReproductionRate />
						</div>
						<div className="bg-gradient-to-br from-green-400 to-blue-500 w-full md:col-start-2 md:col-span-3 rounded flex justify-center items-center">
							<Dashboard/>
						</div>
						<div className="md:col-start-5 "><VaccinationsTracker/></div>
					</div>
				</div>
				<div className="md:my-10 md:col-start-1 md:col-span-5 bg-gradient-to-r from-green-400 to-blue-500 w-full">Footre</div>
			</>
	);
}

export default Home;