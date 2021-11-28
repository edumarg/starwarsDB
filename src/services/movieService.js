import http from "./httpServices";

const endPoint = `/films`;

export function getMovie(id) {
  return http.get(`${endPoint}/${id}`);
}
