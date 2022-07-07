import getBandData from "./band.service";

/* eslint-disable @typescript-eslint/no-explicit-any */
const bandResolver = {
  Query: {
    async bands(_parent: any, _args: any, { dataSources }: any) {
      const { items } = await dataSources.bandAPI.getAll();
      const temp = await Promise.all(
        items.map(async (item: any) => {
          const data = await getBandData(dataSources, item);
          return data;
        })
      );
      return { items: temp };
    },
    async band(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.getOne(id);
      const data = await getBandData(dataSources, res);
      return data;
    },
  },
  Mutation: {
    async createBand(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.postOne(args);
      const data = await getBandData(dataSources, res);
      return data;
    },
    async updateBand(_parent: any, args: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.updateOne(args);
      const data = await getBandData(dataSources, res);
      return data;
    },
    async deleteBand(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.bandAPI.delete(id);
      return res;
    },
  },
};

export default bandResolver;
