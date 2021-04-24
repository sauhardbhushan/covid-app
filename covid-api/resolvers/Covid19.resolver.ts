
export const Covid19Resolver = {
	Query: {
		getGlobalSummary: async (_, __, {dataSources}) => {
			const response = await dataSources.Covid19API.getSummary();
			return { global: response.Global }
		}
	}
}