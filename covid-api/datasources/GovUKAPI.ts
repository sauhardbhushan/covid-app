import {RESTDataSource} from "apollo-datasource-rest";

export default class GovUKAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://coronavirus.data.gov.uk/api/v1/data'
	}

	async getDailySecondDoseVaccinations() {
		return await this.get(`?filters=areaType=overview&structure=${this.getSecondDoseStructure()}`)
	}

	async getDailyFirstDoseVaccinations() {
		return await this.get(`?filters=areaType=overview&structure=${this.getFirstDoseStructure()}`)
	}

	async getVaccinationsByPercentage() {
		return await this.get(`?filters=areaType=overview&structure=${this.getVaccinationsByPercentageStructure()}`)
	}

	async getVaccinatedNumbers() {
		return await this.get(`?filters=areaType=overview&structure=${this.getCumulativePeopleVaccinatedStructure()}`)
	}

	public getVaccinationsByPercentageStructure() {
		return JSON.stringify({
			...this.getTemplateStructure(),
			"cumVaccinationFirstDoseUptakeByPublishDatePercentage": "cumVaccinationFirstDoseUptakeByPublishDatePercentage",
			"cumVaccinationSecondDoseUptakeByPublishDatePercentage": "cumVaccinationSecondDoseUptakeByPublishDatePercentage"
		})
	}

	private getCumulativePeopleVaccinatedStructure() {
		return JSON.stringify({
			...this.getTemplateStructure(),
			"cumPeopleVaccinatedFirstDoseByPublishDate": "cumPeopleVaccinatedFirstDoseByPublishDate",
			"cumPeopleVaccinatedSecondDoseByPublishDate": "cumPeopleVaccinatedSecondDoseByPublishDate"
		})
	}

	public getSecondDosePercentageStructure() {
		return JSON.stringify({
			...this.getTemplateStructure(),

		})
	}

	private getTemplateStructure() {
		return ({
			"date": "date",
			"areaName": "areaName"
		});
	}

	private getSecondDoseStructure() {
		return JSON.stringify({
			...this.getTemplateStructure(),
			"newPeopleVaccinatedSecondDoseByPublishDate": "newPeopleVaccinatedSecondDoseByPublishDate"
		})
	}

	private getFirstDoseStructure() {
		return JSON.stringify({
			...this.getTemplateStructure(),
			"newPeopleVaccinatedFirstDoseByPublishDate": "newPeopleVaccinatedFirstDoseByPublishDate"
		})
	}
}