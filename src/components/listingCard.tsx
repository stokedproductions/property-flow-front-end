import { Listing } from "../features/listings/listing.interfaces";

export const ListingCard: React.FC<Listing> = (props) : JSX.Element => {
    const { 
        title, 
        description, 
        listingType,  
        images, 
        unit,
        organisation } = props

    const price = unit.price ? parseFloat(unit.price).toLocaleString("EN-US") : "";
    
    const handleBrokenImageLink = (e:React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://via.placeholder.com/1920x1080.png?text=No+Image";
    }

    
    return (
        <div className="bg-slate-100 w-full rounded-xl shadow-md hover:shadow-2xl">
            <div className="relative w-full aspect-video">
                <img src={images.length ? images[0] : "https://via.placeholder.com/600x400.png?text=No+Image"} 
                    onError={handleBrokenImageLink}
                    alt={title} className="rounded-t-xl" />
                <div className="absolute top-5 left-5">
                    <p className={`${listingType === "auction" ? "bg-red-500" : "bg-gray-500 "}` + 
                        " min-w-[100px] w-fit px-2 py-1 rounded-2xl text-white font-bold text-xl shadow-xl"}>
                        { listingType === "auction" ? "ON" : "FOR"} &nbsp;
                        {listingType.toUpperCase()}
                    </p>
                </div>
                <div className="absolute top-5 right-5">
                    <p className="bg-orange-500 min-w-[100px] w-fit px-2
                        py-1 rounded-2xl text-white font-bold text-xl shadow-xl">
                        {`R${price}`}
                    </p>
                </div>
                <div className="absolute right-5 bottom-5">
                    <div className="flex justify-center items-center w-[100px] h-[63px]">
                        <img src={organisation.logoUrl} width="200px" height="126px" className="shadow-lg" alt="agent logo"/>
                    </div>
                </div>
            </div>
            <div className="my-3 pl-3">
                <h2 className="text-left text-xl font-bold text-gray-900">{title ? title : ""}</h2>
                <h3 className="text-left font-gray-700 mt-2 line-clamp-3">{description ? description : ""}</h3>
            </div>
        </div>
    );
}