import React from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import { ListingCard } from "../../components/listingCard";


const Listings = () => {
    const { listings } = useSelector((state: RootState) => state.listings);
    return (
        <div className="w-[90%] lg:w-[70%] mx-auto">
            <div className="my-20">
                <h1 className="text-7xl text-gray-800">Property Listings</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-20">
                {listings ? listings.map(listing => <ListingCard key={listing._id} {...listing} />) : null}
            </div>
        </div>
    )
}

export default Listings