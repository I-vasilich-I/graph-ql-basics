import { ApolloServer } from "apollo-server";
import BaseApi from "./api/api";
import { API_URLS } from "./constants";
import resolvers from "./models/resolvers";
import schemas from "./models/schemas";

const server = new ApolloServer({
  typeDefs: schemas,
  csrfPrevention: true,
  cache: "bounded",
  resolvers,
  dataSources: () => ({
    albumAPI: new BaseApi(API_URLS.ALBUM_API),
    artistAPI: new BaseApi(API_URLS.ARTIST_API),
    genreAPI: new BaseApi(API_URLS.GENRE_API),
    bandAPI: new BaseApi(API_URLS.BAND_API),
    userAPI: new BaseApi(API_URLS.USER_API),
    trackAPI: new BaseApi(API_URLS.TRACK_API),
    favoritesAPI: new BaseApi(API_URLS.FAVORITES_API),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
