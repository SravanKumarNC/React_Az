import RestaurantCard from "./RestaurantCard";

const handleChange = () => {
    console.log("sss")
}



const Body = () => {
    const listOfRestaurants = [
        {
            resName : "Meghana food" ,
            id : "1",
            cuisines :"Biryani, North indian, Asian",
            Rating :"4.4",
            EstimateTime :"35 mins"
        },
        {
            resName : "KFC" ,
            id : "2",
            cuisines :"Barger, chicken, fries",
            Rating :"3.8",
            EstimateTime :"25 mins"
        }
    ]
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={handleChange}>Top Rated RestaurantCard </button>
            </div>
            <div className="Res-container">
                {/* RestaurantCard */}
                {listOfRestaurants.map((restaurants) => {
                    <RestaurantCard key={restaurants.id} resData={restaurants}/>
                })}
                
            </div>
        </div>
    );
};
export default Body;