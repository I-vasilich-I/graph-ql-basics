/* eslint-disable @typescript-eslint/no-explicit-any */
const bandResolver = {
  Query: {
    async bands(_parent: any, _args: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.getAll();
      return res;
    },
    async band(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.getOne(id);
      return res;
    },
  },
  Mutation: {
    async createBand(_parent: any, args: any, { dataSources }: any) {
      const { genresIds, ...rest } = await dataSources.bandAPI.postOne(args);
      const genres = await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)));
      return { genres, ...rest };
    },
    async updateBand(_parent: any, args: any, { dataSources }: any) {
      const { genresIds, ...rest } = await dataSources.bandAPI.updateOne(args);
      const genres = await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)));
      return { genres, ...rest };
    },
    async deleteBand(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.delete(id);
      return res;
    },
  },
};

export default bandResolver;
