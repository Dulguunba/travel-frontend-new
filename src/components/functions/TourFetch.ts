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

  export const getToursByDestination = async (set: Function, destinationId: string) => {
    try {
      const response = await instance.post("/travel/destination", {destinationId});
      const data = await response?.data
      set(data);
      console.log("popular tours by destination id", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };

  export const getTourById = async (set: Function, travelId: string) => {
    try {
      
      const response = await instance.post("/travel/id", {travelId});
      const data = await response?.data?.result
      set(data);
      console.log("tour detail info by id", data);
    } catch (error) {
      return alert(`Уучлаарай алдаа үүслээ`);
    }
  };
  