export type BreweryData = {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  city: string;
  postal_code: string;
  country: string;
  phone: string;
  website_url: string;
};

export type BreweryCardData = {
  brewery: BreweryData;
};
export type BreweryListData = {
  breweries: BreweryData[];
};

export type BreweryDetail = {
  id: string | undefined;
};

export type Search = {
  onSearch: (query: string) => void;
};