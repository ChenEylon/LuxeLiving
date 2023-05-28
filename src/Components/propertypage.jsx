import './Components.css'
import data from './../data.json'
import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import localforage from 'localforage';

export default function Propertypage() {
    const [info, setdata] = useState([]);
    const [rent, setrent] = useState(false)
    const handleclick = () => {
        return setrent(true)
    }
    const handleclick2 = () => {
        return setrent(false)
    }
    useEffect(() => {
        setdata(data.results);
    }, []);
    const { id } = useParams();
    console.log(id);
    const dataid = info?.find((house) => house.zpid == id);
    console.log(dataid);
    if (rent == false) {
        return (
            <div className='propertypage'>
                <div className='img'>
                    <div className='buttons'><button className='button' onClick={handleclick}>Rent</button>
                    <button className='button' onClick={handleclick2}>Buy</button></div>
                    {dataid && <img className='thephoto' src={`${dataid?.imgSrc} `} alt="" />}

                </div>
                <div className='bottom'>
                    <div>
                        <h5>Price for buy:{dataid?.price.toLocaleString()} $</h5>
                        <h4>{dataid?.city} ,{dataid?.country}</h4>
                       


                        <h5><i className="fa fa-bed"></i>: {dataid?.bedrooms}</h5>
                        <h5><i className="fa fa-bath"></i>: {dataid?.bathrooms}</h5>


                        <h4>home status:{dataid?.homeStatus}</h4>
                        <h4>home type:{dataid?.homeType}</h4>
                        <h3>street: {dataid?.streetAddress}
                        </h3>
                    </div>
                    <Link to={'/agents'}> <div><button className='button'> Contact our agent</button></div></Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className='propertypage'>
            <div className='img'>
                <div className='buttons'><button className='button' onClick={handleclick}>Rent</button>
                <button className='button' onClick={handleclick2}>Buy</button></div>
                {dataid && <img className='thephoto' src={`${dataid?.imgSrc} `} alt="" />}

            </div>
            <div className='bottom'>
                <div>
                    <h5>Price for rent:{dataid?.rentZestimate.toLocaleString()} $</h5>
                    <h4>{dataid?.city}{dataid?.country}</h4>
                    


                    <h5><i className="fa fa-bed"></i>: {dataid?.bedrooms}</h5>
                    <h5><i className="fa fa-bath"></i>: {dataid?.bathrooms}</h5>


                    <h4>home status:{dataid?.homeStatus}</h4>
                    <h4>home type:{dataid?.homeType}</h4>
                    <h3>street: {dataid?.streetAddress}
                    </h3>
                </div>
               <Link to={'/agents'}> <div><button className='button'> Contact our agent</button></div></Link>
            </div>
        </div>
    )
    }
}





