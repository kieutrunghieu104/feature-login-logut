import httpRequest from "~/shared/api/httpClient";

const login = async ({ email, password }) => {
  const result = await httpRequest.post("/auth/login", { email, password });
  return result.data;
};

export {
  login,
}