export interface Unit {
    bedrooms : string,
    bathrooms : string,
    parking : string,
    price : string,
}

export interface Listing {
    _id : string;
    agent : string,
    title : string,
    description : string,
    status : string,
    organisation : {
        _id: string,
        logoUrl: string
    },
    listingType : string,
    listingSector : string,
    unit : Unit,
    images : string[]
}

export interface ListingsState {
  listings: Listing[] | null;
  status: 'idle' | 'loading' | 'failed';
}