const { gql } = require('apollo-server')

const typeDefs = gql`
		type Query {
        getGlobalSummary: SummaryResponse
				getUKVaccinations: VaccinationsResponse
    }
		
		type SummaryResponse {
				global: GlobalSummaryResponse
		}
		
		type VaccinationsResponse {
				firstDoses: FirstDoseVaccinationsResponse
				secondDoses: SecondDoseVaccinationsResponse
		}

    type FirstDoseVaccinationsResponse {
				cumulativePercentage: Float
				cumulativeNumber: Int
        length: Int
        maxPageLimit: Int
        data: [FirstDoseVaccinationsData]
    }
		
		type FirstDoseVaccinationsData {
        date: String
        areaName: String
        newPeopleVaccinatedFirstDoseByPublishDate: Int
		}
		
    type SecondDoseVaccinationsResponse {
        cumulativePercentage: Float
        cumulativeNumber: Int
				length: Int
				maxPageLimit: Int
				data: [SecondDoseVaccinationsData]
		}
		
		type SecondDoseVaccinationsData {
				date: String
				areaName: String
        newPeopleVaccinatedSecondDoseByPublishDate: Int
		}
		
		type GlobalSummaryResponse {
			NewConfirmed: String
			TotalConfirmed: String
			NewDeaths: String
			TotalDeaths: String
		}
`

module.exports = typeDefs;
