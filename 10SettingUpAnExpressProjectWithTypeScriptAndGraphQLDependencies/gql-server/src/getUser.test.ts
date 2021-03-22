import typeDefs from './typeDefs';
import resolvers from './resolvers';
import faker, { fake } from 'faker';
import { makeExecutableSchema } from 'apollo-server-express';
import { testGraphQLQuery } from './testGraphQLQuery';
import {addMockFunctionsToSchema} from 'apollo-server-express';


describe("Testing getting user", () => {
    const GetUser = `
        query GetUser($id: ID!) {
            getUser(id: ID!) {
                id
                username
                email
            }
        }
    `

    it("gets the desired user", async () => {
        const schema = makeExecutableSchema({typeDefs, resolvers});
        const userId = faker.random.alphaNumeric(20);
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const mocks = {
            User: () => ({
                id: userId,
                username,
                email
            })
        }
        console.log("id", userId);
        console.log("username", username);
        console.log("email", email);
        addMockFunctionsToSchema({schema, mocks});
    
        const queryResponse = await testGraphQLQuery({
            schema,
            source: GetUser,
            variableValues: {id: faker.random.alphaNumeric(20)}
        })

        const result = queryResponse.data ? queryResponse.data.GetUser : null;
        console.log("Result", result);
        expect(result).toEqual({
            id: userId,
            username,
            email
        })
    })
})

