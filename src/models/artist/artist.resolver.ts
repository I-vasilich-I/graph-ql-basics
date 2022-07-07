/* eslint-disable @typescript-eslint/no-explicit-any */
import getArtistData from "./artist.service";

const artistResolver = {
  Query: {
    async artists(_parent: any, _args: any, { dataSources }: any) {
      const { items } = await dataSources.artistAPI.getAll();
      const temp = await Promise.all(
        items.map(async (item: any) => {
          const newItem = await getArtistData(dataSources, item);
          return newItem;
        })
      );
      return { items: temp };
    },
    async artist(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.getOne(id);
      const data = await getArtistData(dataSources, res);
      return data;
    },
  },
  Mutation: {
    async createArtist(_parent: any, { artist }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.postOne(artist);
      const data = await getArtistData(dataSources, res);
      return data;
    },
    async updateArtist(_parent: any, { artist }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.updateOne(artist);
      const data = await getArtistData(dataSources, res);
      return data;
    },
    async deleteArtist(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.delete(id);
      return res;
    },
  },
};

export default artistResolver;
