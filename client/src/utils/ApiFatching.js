import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const FetchData = axios.create({
  baseURL: apiUrl,
  headers: { Authorization: `Bearer ${apiKey}` },
});

export const getAllCategories = () => FetchData.get("/categories?populate=*");

export default {
  getAllCategories,
};
