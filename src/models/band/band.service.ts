/* eslint-disable @typescript-eslint/no-explicit-any */
const getBandData = async (dataSources: any, { genresIds, ...rest }: any) => {
  const genres = genresIds
    ? await Promise.all(genresIds.map((genreId: any) => dataSources.genreAPI.getOne(genreId)))
    : [];
  return { genres, ...rest };
};

export default getBandData;
