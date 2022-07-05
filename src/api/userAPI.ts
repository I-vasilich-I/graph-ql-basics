/* eslint-disable @typescript-eslint/no-explicit-any */
import { RESTDataSource } from "apollo-datasource-rest";

class UserAPI extends RESTDataSource {
  baseURL: string;

  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getOne(id: string) {
    const { lastName, _id, ...rest } = await this.get(
      `/${encodeURIComponent(id)}` // path
    );
    return { id: _id, secondName: lastName, ...rest };
  }

  // POST
  async login(data: any) {
    const res = await this.post("/login", data);
    return res;
  }

  // POST
  async register(data: any) {
    const { firstName, lastName, _id, email, password } = await this.post("/register", data);
    return { id: _id, firstName, secondName: lastName, email, password };
  }

  // POST
  async verify(data: any) {
    const res = await this.post("/verify", data);
    return res;
  }
}

export default UserAPI;
