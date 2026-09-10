import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const API = `${BACKEND_URL}/api`;

export async function submitInquiry(payload) {
  const { data } = await axios.post(`${API}/inquiries`, payload);
  return data;
}

export async function adminLogin(password) {
  const { data } = await axios.post(`${API}/admin/login`, { password });
  return data;
}

export async function fetchInquiries(token) {
  const { data } = await axios.get(`${API}/inquiries`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
}
