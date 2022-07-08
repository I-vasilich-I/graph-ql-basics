/* eslint-disable @typescript-eslint/no-explicit-any */
const getArtistData = async (dataSources: any, { bandsIds, ...rest }: any) => {
  const bands =
    bandsIds && bandsIds.length
      ? await Promise.all(bandsIds.map((bandId: string) => dataSources.bandAPI.getOne(bandId)))
      : [];
  return { bands, ...rest };
};

export default getArtistData;
