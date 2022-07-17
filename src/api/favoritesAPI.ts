/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

type TType = "bands" | "genres" | "artists" | "tracks";

class FavoritesAPI extends RESTDataSource {
  baseURL: string;

  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getAll() {
    const { _id, ...rest } = await this.get("/");
    return { id: _id, ...rest };
  }

  async add(type: TType, id: string) {
    const { _id, ...rest } = await this.put("/add", { type, id });
    return { id: _id, ...rest };
  }

  async addTrack(id: string) {
    const res = await this.add("tracks", id);
    return res;
  }

  async addBand(id: string) {
    const res = await this.add("bands", id);
    return res;
  }

  async addGenre(id: string) {
    const res = await this.add("genres", id);
    return res;
  }

  async addArtist(id: string) {
    const res = await this.add("artists", id);
    return res;
  }
}

export default FavoritesAPI;
