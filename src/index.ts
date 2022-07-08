import { ApolloServer } from "apollo-server";
import BaseAPI from "./api/baseAPI";
import FavoritesAPI from "./api/favoritesAPI";
import UserAPI from "./api/userAPI";
import { API_URLS } from "./constants";
import resolvers from "./models/resolvers";
import schemas from "./models/schemas";

const server = new ApolloServer({
  typeDefs: schemas,
  csrfPrevention: true,
  cache: "bounded",
  resolvers,
  dataSources: () => ({
    albumAPI: new BaseAPI(API_URLS.ALBUM_API),
    artistAPI: new BaseAPI(API_URLS.ARTIST_API),
    genreAPI: new BaseAPI(API_URLS.GENRE_API),
    bandAPI: new BaseAPI(API_URLS.BAND_API),
    userAPI: new UserAPI(API_URLS.USER_API),
    trackAPI: new BaseAPI(API_URLS.TRACK_API),
    favoritesAPI: new FavoritesAPI(API_URLS.FAVORITES_API),
  }),
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
