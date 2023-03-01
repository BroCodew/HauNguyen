import axiosClient from "./axiosClient";

export interface IProducts {
  name: string;
  category: any;
  created_at: number;
  created_by: number;
  description: string;
  id: number;
  isFreeShip: boolean;
  isPromotion: boolean;
  originalPrice: number;
  productId: any;
  promotionPercent: number;
  salePrice: number;
  shortDescription: string;
  thumbnail: any;
  title: any;
  updated_at: number;
  updated_by: number;
}

export interface IFilters {
  onChange: (value: any) => void;
  filters: any;
}

const productApi = {
  async getAll(params: { _page: number; _limit: number }) {
    // Transform _page to _start
    const newParams: any = { ...params };
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);
    // Remove un-needed key
    delete newParams._page;
    // Fetch product list + count
    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count: number = await axiosClient.get("/products/count", {
      params: newParams,
    });
    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
};

export default productApi;
