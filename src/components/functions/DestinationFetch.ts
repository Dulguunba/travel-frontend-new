import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const instance = axios.create({
  baseURL: "http://localhost:8800",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const getDestination = async (set: Function) => {
    try {
      const response = await instance.get("/destination/get");
      const data = await response?.data
      set(data);
      console.log("destination data", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };

  export const getDestinationCategory = async (set: Function) => {
    try {
      const response = await instance.get("/destinationcategory/get");
      const data = await response?.data
      set(data);
      console.log("destination category data", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };
