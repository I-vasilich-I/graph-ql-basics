/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

class BaseApi extends RESTDataSource {
  baseURL: string;

  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async getOne(id: string) {
    const res = await this.get(
      `/${encodeURIComponent(id)}` // path
    );
    return { id: res._id, ...res };
  }

  // GET
  async getAll() {
    const res = await this.get("/");
    return { id: res._id, ...res };
  }

  // POST
  async postOne(data: any) {
    const res = await this.post("/", data);
    return { id: res._id, ...res };
  }

  // PUT
  async updateOne(data: any) {
    const res = await this.put(`/${encodeURIComponent(data.id)}`, data);

    return { id: res._id, ...res };
  }

  // DELETE
  async deleteOne(id: string) {
    const res = await this.delete(`/${encodeURIComponent(id)}`);
    return { id: res._id, ...res };
  }
}

export default BaseApi;
