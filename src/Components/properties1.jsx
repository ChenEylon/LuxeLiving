import { Outlet, Link } from "react-router-dom";
import Properties from "./properties";
import { Button } from "@mui/material";


import './Components.css'

export default function Properties1({ value, favorites, handleFavoriteToggle }) {
    const isFavorite = favorites.includes(value);

    return (
        <div className="Properties1">
            <Link to={`${value.zpid}`}> <img className="prop" src={value.imgSrc} alt="" /></Link>
            <h5>{value.homeType}</h5>
            <div id="templater"><div>
                <h5 className="loc" >City:{value.city}</h5>
                <h5 className="price">Price:{value.price.toLocaleString()} $</h5>
            </div>
                <div>
                    <h5><i className="fa fa-bed"></i>: {value.bedrooms}</h5>
                    <h5><i className="fa fa-bath"></i>: {value.bathrooms}</h5>
                </div>
            </div>
            <Button color="tertiary" disabled={false} size="small" variant="filled" style={{ backgroundColor: 'greenyellow' }} onClick={() => handleFavoriteToggle(value)}>
                {isFavorite ? "Unmark as Favorite" : "Mark as Favorite"}
            </Button>
        </div>
    )
}

