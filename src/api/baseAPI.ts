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
    const { _id, ...rest } = await this.get(
      `/${encodeURIComponent(id)}` // path
    );
    return { id: _id, ...rest };
  }

  // GET
  async getAll() {
    const res = await this.get("/");
    return {
      ...res,
      items: res.items.map((el: any) => {
        const newEl = el;
        newEl.id = el._id;
        return newEl;
      }),
    };
  }

  // POST
  async postOne(data: any) {
    const { _id, ...rest } = await this.post("/", data);
    return { id: _id, ...rest };
  }

  // PUT
  async updateOne({ id, ...rest }: any) {
    const { _id, ...res } = await this.put(`/${encodeURIComponent(id)}`, { _id: id, ...rest });
    return { id: _id, ...res };
  }

  // DELETE
  async deleteOne(id: string) {
    const res = await this.delete(`/${encodeURIComponent(id)}`);
    return { id: res._id, ...res };
  }
}

export default BaseApi;
