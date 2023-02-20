import React from "react";
import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params: any) {
    const url = "/categories/";
    return axiosClient.get(url, { params });
  },
  get(id: any) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data: any) {
    const url = `/categories`;
    return axiosClient.post(url, data);
  },
  update(data: any) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id: any) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoryApi;
