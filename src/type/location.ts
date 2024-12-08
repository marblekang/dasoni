export interface FetchLocationInfoParams {
  searchKeyword: string;
  x: number | null;
  y: number | null;
}

export interface LocationDataInfo {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface LocationReseponseTemplate {
  documents: LocationDataInfo[];
}

export interface GetDistanceParams {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
}

export interface LocationSearchProps {
  searchKeyword: string;
}
