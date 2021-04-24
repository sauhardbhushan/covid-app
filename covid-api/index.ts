import Covid19API from "./datasources/Covid19API";
import GovUKAPI from "./datasources/GovUKAPI";
import { Covid19Resolver } from './resolvers/Covid19.resolver';
import {GovUKResolver} from "./resolvers/GovUK.resolver";

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/schema.ts');

const server = new ApolloServer({
	typeDefs,
	resolvers: [Covid19Resolver, GovUKResolver],
	dataSources: () => ({
		Covid19API: new Covid19API(),
		GovUKAPI: new GovUKAPI()
	})
});

server.listen().then(() => {
	console.log(`🚀 Server running lol`)
});
