import { Outlet, Link } from "react-router-dom";
import './Components.css'
import Button from '@mui/material/Button';
import Arrowupword from '@mui/icons-material/ArrowUpwardRounded';
import { useState, useEffect } from "react";
export default function Homepage() {
    const images = [" https://www.gannett-cdn.com/presto/2021/01/12/NPBD/08d0fd5e-2255-4d49-b608-e83342ae4615-PBN_POOL_REAR_535_N_County_Road_HiRes_PictureItSoldFL.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
        "https://loveincorporated.blob.core.windows.net/contentimages/gallery/2ada66d8-bb16-4b9c-ab80-280e63ce782b-bel-air-mega-mansion-1.jpg"
        , "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ville-di-lusso-piu-belle-del-mondo-oggetto-editoriale-800x600-1528889075.jpg"
        , "https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        },5000)
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className="Homepage">
            <img className="openingphoto" src="https://www.gannett-cdn.com/presto/2021/01/12/NPBD/08d0fd5e-2255-4d49-b608-e83342ae4615-PBN_POOL_REAR_535_N_County_Road_HiRes_PictureItSoldFL.jpg?width=1200&disable=upscale&format=pjpg&auto=webp" alt="" />
            <h1 className="top-left">Get ready to fall in love.</h1>
            <div className="properties3">
                <div className="property1"><img className="property1" src={images[currentIndex]} alt="" /></div>
                <div className="property2"><img className="property2" src={images[currentIndex + 1]} alt="" /></div>
                <div className="property3"><img className="property3" src={images[currentIndex + 2]} alt="" /></div>

            </div>
            
            <div className="options">
                
                <div>
                    <div className="pho buy1"><h2 className="first buy">Rent</h2><Link to={'/properties'}><img  className="pho" src="https://www.propertytalk.com/blog/wp-content/uploads/2017/06/people.jpg" alt="" /></Link> </div>
                    <div className="buy1"><h2 className="second buy"> Buy</h2> <Link to={'/properties'}><img  className="pho" src="https://i.insider.com/61686ee538c19600182fed95?width=1136&format=jpeg" alt="" /></Link></div>
                </div>
                <div>
                    <div className="buy1"> <h2 className="third buy" >sell</h2> <Link to={'/contact'}><img className="pho" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDU_ZV8Vo7y2VqCjs9v300pKrjsXMJXk-sUw&usqp=CAU" alt="" /></Link></div>
                    <div className="buy1"><h2 className="fourth buy"> become an agent</h2> <Link to={'/agents'}><img className="pho" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0octs-bYkIatIHMiE3bgdqgnZtiR-gTs5A&usqp=CAU" alt="" /></Link></div>
                </div>

            </div>
            <Button variant="contained" style={{marginTop:'20px'}} endIcon={<Arrowupword/>} onClick={(()=> window.scrollTo(0,0) )}>
                Up
            </Button>
            </div>
       
    )

}