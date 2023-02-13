import jwt from "jwt-decode";
import axClient from "./AxiosClient";

const mockData = false;

export function getOrgTypes() {
  if (mockData) return Promise.resolve();
  return axClient
    .get("https://api.edugate-eg.com/api/EduGate/OrganizationType")
    .then((res) => res.data);
}

export function postRequestNewOrg(data) {
  if (mockData) return Promise.resolve();
  return axClient
    .post("https://api.edugate-eg.com/api/EduGate/OrgAdd", data)
    .then((res) => res.data);
}
