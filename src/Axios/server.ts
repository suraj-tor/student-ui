import axios, { AxiosResponse } from "axios";
import { StudentType } from "../redux/studentSlices";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: {}) => instance.post(url, body).then(responseBody),
  put: (url: string, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

const Data = {
  getStudent: (): Promise<StudentType[]> => requests.get("student"),
  retrieveStudent: (id: number): Promise<StudentType> => requests.get(`student/${id}`),
  createStudent: (post: StudentType): Promise<StudentType> => requests.post("student", post),
  updateStudent: (id: number, post: StudentType): Promise<StudentType> => requests.put(`student/${id}`, post),
  deleteStudent: (id: number): Promise<void> => requests.delete(`student/${id}`),
};

export default Data;
