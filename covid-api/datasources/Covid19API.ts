import { RESTDataSource } from 'apollo-datasource-rest'

export default class Covid19API extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://api.covid19api.com'
	}

	async getSummary() {
		return await this.get('summary');
	}
}