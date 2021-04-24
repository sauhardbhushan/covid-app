export const GovUKResolver = {
	Query: {
		getUKVaccinations: async (_, __, {dataSources}) => {
			const secondDoseResponse = await dataSources.GovUKAPI.getDailySecondDoseVaccinations();
			const secondDoses = JSON.parse(secondDoseResponse);

			const firstDoseResponse = await dataSources.GovUKAPI.getDailyFirstDoseVaccinations();
			const firstDoses = JSON.parse(firstDoseResponse);

			const vaccinationsResponse = await dataSources.GovUKAPI.getVaccinationsByPercentage();
			const vaccinations = JSON.parse(vaccinationsResponse);

			const vaccinatedPeopleResponse = await dataSources.GovUKAPI.getVaccinatedNumbers();
			const vaccinatedPeople = JSON.parse(vaccinatedPeopleResponse);

			return {
				firstDoses: {
					...firstDoses,
					cumulativePercentage: vaccinations.data[0].cumVaccinationFirstDoseUptakeByPublishDatePercentage,
					cumulativeNumber: vaccinatedPeople.data[0].cumPeopleVaccinatedFirstDoseByPublishDate
				},
				secondDoses: {
					...secondDoses,
					cumulativePercentage: vaccinations.data[0].cumVaccinationSecondDoseUptakeByPublishDatePercentage,
					cumulativeNumber: vaccinatedPeople.data[0].cumPeopleVaccinatedSecondDoseByPublishDate
				}
			};
		}
	}
}
