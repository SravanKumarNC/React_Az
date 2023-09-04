import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resName,cuisines,Rating,EstimateTime}) => {
    return(
        <div className="res-card">
            <img 
                className="res-logo"
                alt="res-logo" 
                src = {CDN_URL}
            />
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
            <h5>{Rating}</h5>
            <h5>{EstimateTime}</h5>
        </div>
    );
};

export default RestaurantCard;