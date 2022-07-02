/* eslint-disable @typescript-eslint/no-explicit-any */
import { RESTDataSource } from "apollo-datasource-rest";

class BaseApi extends RESTDataSource {
  baseURL: string;

  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getOne(id: string) {
    const res = await this.get(
      `/${encodeURIComponent(id)}` // path
    );
    return res;
  }

  // GET
  async getAll() {
    const res = await this.get("/");
    return res;
  }

  // POST
  async postOne(data: any) {
    const res = await this.post("/", data);
    return res;
  }

  // PUT
  async updateOne(data: any) {
    const res = await this.put(`/${encodeURIComponent(data.id)}`, data);

    return res;
  }

  // DELETE
  async deleteOne(id: string) {
    const res = await this.delete(`/${encodeURIComponent(id)}`);
    return res;
  }
}

export default BaseApi;
