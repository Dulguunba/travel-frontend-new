import { instance } from "./DestinationFetch";

export const getCategory = async (set: Function) => {
    try {
      const response = await instance.get("/category/get");
      const data = await response?.data
      set(data);
      console.log("destination data", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };

  export const getTours = async (set: Function) => {
    try {
      const response = await instance.get("/travel/get");
      const data = await response?.data
      set(data);
      console.log("destination data", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };