export interface TourItemType {
    price: {
      adultPrice: number;
      childPrice: number;
    };
    food: {
      IsIncludeFoodCheck: boolean;
      IsIncludeFoodPriceCheck: boolean;
      foodNumber: number;
      foodPrice: number;
    };
    traffic: {
      trafficPrice: number;
      IsIncludeTrafficCheck: boolean;
      IsIncludeTrafficPriceCheck: boolean;
    };
    image: {
      mainImage: string;
      supportImage: string;
    };
    _id: string;
    name: string;
    travelCompany: string;
    duration: number;
    categoryType: string[];
    touristType: any[];
    additionalInfo: string;
    route: [
      {
        startPoint: string;
        endPoint: string;
        vehicle: string;
        place: string;
        activity: string;
        sectionDuration: number;
        sectionImage: string;
      }
    ];
    calendar: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    destination: {
      _id: string;
      name: string;
      english: string;
      additionalInfo: string;
      image: string;
      destinationCategory: string;
    };
    maxTourist: number;
  }


  export type CategoriesType={
    result: [
      { _id: string;
        name: string;
        english: string;}
    ]
  }

  export type ToursType = {
    result: TourItemType[]
  }

  export type CategoryItemType = {
    _id: string;
    name: string;
    english: string;
  }