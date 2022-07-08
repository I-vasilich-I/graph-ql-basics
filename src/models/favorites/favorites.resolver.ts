/* eslint-disable @typescript-eslint/no-explicit-any */
import getFavoritesData from "./favorites.service";

const favoritesResolver = {
  Query: {
    async favorites(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.getAll();
      const data = await getFavoritesData(dataSources, res);
      return data;
    },
  },
  Mutation: {
    async addTrackToFavorites(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.addTrack(id);
      const data = await getFavoritesData(dataSources, res);
      return data;
    },
    async addBandToFavorites(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.addBand(id);
      const data = await getFavoritesData(dataSources, res);
      return data;
    },
    async addArtistToFavorites(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.addArtist(id);
      const data = await getFavoritesData(dataSources, res);
      return data;
    },
    async addGenreToFavorites(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.favoritesAPI.addGenre(id);
      const data = await getFavoritesData(dataSources, res);
      return data;
    },
  },
};

export default favoritesResolver;
