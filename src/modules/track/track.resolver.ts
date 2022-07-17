/* eslint-disable @typescript-eslint/no-explicit-any */
import getTrackData from "./track.service";

const trackResolver = {
  Query: {
    async tracks(_parent: any, _args: any, { dataSources }: any) {
      const { items } = await dataSources.trackAPI.getAll();
      const temp = await Promise.all(
        items.map(async (item: any) => {
          const data = await getTrackData(dataSources, item);
          return data;
        })
      );
      return { items: temp };
    },
    async track(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.getOne(id);
      const data = await getTrackData(dataSources, res);
      return data;
    },
  },
  Mutation: {
    async createTrack(_parent: any, { track }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.postOne(track);
      const data = await getTrackData(dataSources, res);
      return data;
    },
    async updateTrack(_parent: any, { track }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.updateOne(track);
      const data = await getTrackData(dataSources, res);
      return data;
    },
    async deleteTrack(_parent: any, { id }: any, { dataSources }: any) {
      const res = await dataSources.trackAPI.deleteOne(id);
      return res;
    },
  },
};

export default trackResolver;
