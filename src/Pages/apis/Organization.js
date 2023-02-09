import jwt from "jwt-decode";
import axClient from "./AxiosClient";

export function getOrgTypes() {
  return axClient
    .get("https://api.edugate-eg.com/api/EduGate/OrganizationType")
    .then((res) => res.data);
}

export function postRequestNewOrg(data) {
  return axClient
    .post("https://api.edugate-eg.com/api/EduGate/OrgAdd", data)
    .then((res) => res.data);
}
