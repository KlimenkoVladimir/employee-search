import axios from "axios";

export default class Service {
  static async getUsers(params) {
    const idQuery = params.id
      ? params.id.map((id) => `id=${id}`).join("&")
      : "";

    const nameQuery = params.name
      ? params.name.map((name) => `name=${name}`).join("&")
      : "";

    const urlId = `https://jsonplaceholder.typicode.com/users?${idQuery}`;
    const urlName = `https://jsonplaceholder.typicode.com/users?${nameQuery}`;

    const [responseId, responseName] = await Promise.all([
      idQuery ? axios.get(urlId) : null,
      nameQuery ? axios.get(urlName) : null,
    ]);

    const responseIdData = responseId ? responseId.data : [];
    const responseNameData = responseName ? responseName.data : [];

    const response = [...responseIdData, ...responseNameData];

    const uniqueResponse = Array.from(
      new Set(response.map((user) => user.id))
    ).map((id) => response.find((user) => user.id === id));

    return uniqueResponse;
  }
}
