import axios from "axios";
import BaseUrl from "../../../Config";

export const getCurrentUser = async (token) => {
  if (!token) throw new Error("No token provided");
  const apiUrl = `${BaseUrl}/get-me`;
  const response = await axios.get(apiUrl, {
    headers: { Authorization: `${token}` },
  });

  return response.data; 
};