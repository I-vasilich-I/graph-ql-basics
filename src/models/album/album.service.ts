/* eslint-disable @typescript-eslint/no-explicit-any */
interface IFieldsIds {
  bandsIds: string[];
  genresIds: string[];
  trackIds: string[];
  artistsIds: string[];
}

interface IReturnFields {
  bands: any[];
  genres: any[];
  tracks: any[];
  artists: any[];
}

const getAlbumFields = async (
  dataSources: any,
  { bandsIds, genresIds, trackIds, artistsIds }: IFieldsIds
): Promise<IReturnFields> => {
  const artists = artistsIds
    ? await Promise.all(artistsIds.map((artistId) => dataSources.artistAPI.getOne(artistId)))
    : [];
  const bands = bandsIds ? await Promise.all(bandsIds.map((bandId) => dataSources.bandAPI.getOne(bandId))) : [];
  const genres = genresIds ? await Promise.all(genresIds.map((genreId) => dataSources.genreAPI.getOne(genreId))) : [];
  const tracks = trackIds ? await Promise.all(trackIds.map((trackId) => dataSources.trackAPI.getOne(trackId))) : [];
  return { bands, genres, tracks, artists };
};

export default getAlbumFields;
