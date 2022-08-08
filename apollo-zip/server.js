const { config } = require("dotenv");
const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageLocalDefault } = require("apollo-server-core");

const resolvers = require("./Resolvers/ZIPResolver");
const typeDefs = require("./Schema/Zip.types");
const ZippopotamApi = require("./Api/ZippopotamApi");

config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  /* eslint-disable new-cap */
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  introspection: process.env.ENABLE_PLAYGROUND,
  playground: process.env.ENABLE_PLAYGROUND,
  dataSources: () => ({
    zippotamAPI: new ZippopotamApi(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
