/* eslint-disable @typescript-eslint/no-explicit-any */
const artistResolver = {
  Query: {
    async artists(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.getAll();
      return res;
    },
    async artist(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.getOne(id);
      return res;
    },
  },
  Mutation: {
    async createArtist(_parent: any, { artist }: any, { dataSources }: any) {
      const { bandsIds, ...rest } = await dataSources.artistAPI.postOne(artist);
      const bands = await Promise.all(bandsIds.map((bandId: any) => dataSources.bandAPI.getOne(bandId)));
      return { bands, ...rest };
    },
    async updateArtist(_parent: any, { artist }: any, { dataSources }: any) {
      const { bandsIds, ...rest } = await dataSources.artistAPI.updateOne(artist);
      const bands = await Promise.all(bandsIds.map((bandId: any) => dataSources.bandAPI.getOne(bandId)));
      return { bands, ...rest };
    },
    async deleteArtist(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.artistAPI.delete(id);
      return res;
    },
  },
};

export default artistResolver;
