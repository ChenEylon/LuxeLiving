import './Components.css'
import { useEffect, useState } from "react";
import Properties1 from "./properties1";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Arrowupword from '@mui/icons-material/ArrowUpwardRounded';


export default function Properties({ info, setdata, x,id }) {

    const [typeandnum, settypeandnum] = useState({ type: null, num: null });
    const handlechangetype = (newval1) => {

        const tempCountAndType = { ...typeandnum, type: newval1 };
        settypeandnum((previus) => ({ ...previus, type: newval1, }))
        console.log(tempCountAndType);
        if (tempCountAndType.num != null && tempCountAndType.type != null) {
            console.log("get in the if of set count");
            console.log(info);
            console.log(tempCountAndType.type);
            console.log(tempCountAndType.num);
            let newarray = x.filter(
                (element) => element[tempCountAndType.type] == tempCountAndType.num
            );

            setdata(newarray);
        } else {   setdata([...info].sort((a, b) => a.price - b.price))}


    }

    const handlechangenum = (newval2) => {

        const tempCountAndType = { ...typeandnum, num: newval2 };
        settypeandnum((previus) => ({ ...previus, num: newval2, }))
        console.log(tempCountAndType);
        if (tempCountAndType.num != null && tempCountAndType.type != null) {
            console.log("get in the if of set count");
            let newarray = x.filter(
                (element) => element[tempCountAndType.type] == tempCountAndType.num
            );
            setdata(newarray);
        }

        else {  setdata([...info].sort((a, b) => a.price - b.price)) }
    }





    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
      }, []);
    const handleFavoriteToggle = (value) => {
        if (favorites.includes(value)) {
            setFavorites(favorites.filter((item) => item !== value));
        } else {
            setFavorites([...favorites, value]);
        }
    };
    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites));
    },[favorites])

    const sortfunction = (value) => {
        if (value == "1") {
            setdata([...info].sort((a, b) => a.price - b.price))
        }
        if (value == "2") {
            setdata([...info].sort((a, b) => b.price - a.price))
        }
        if (value == "3") {
            setdata([...info].sort((a, b) => a.rentZestimate - b.rentZestimate))
        }
        if (value == "4") {
            setdata([...info].sort((a, b) => b.rentZestimate - a.rentZestimate))
        }
        else if (value == '5') {

             setdata(x.filter((property) => favorites.includes(property)));

        }

    }
    const handlegoback = () => {
        history.go(0)
    }

    return (
        <div className='properties'>
            <div className='whattodo'>
                <img className="openingphoto2" src="https://decombo.com/wp-content/uploads/2021/01/modern-mimari-nedir.jpg" alt="" />
            </div>
            <div className='duke'>

                <div >
                    <Box className='select' sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel className='select' variant="standard" htmlFor="uncontrolled-native" />
                            <NativeSelect
                                defaultValue={30}
                                onChange={(e) => sortfunction(e.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',


                                }} style={{ width: '150px' }}
                            >

                                <option value="">Pick your sort</option>
                                <option value={1}>low to high Buy</option>
                                <option value={2}>high to low Buy</option>
                                <option value={3}>high to low rent</option>
                                <option value={4}>low to high rent</option>
                                <option value={5} onClick={handleFavoriteToggle}>Favorites</option>
                            </NativeSelect>
                        </FormControl>

                    </Box>

                </div>
                <div>


                    <Box className='select' sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel className='select' variant="standard" htmlFor="uncontrolled-native" />
                            <NativeSelect
                                defaultValue={30}
                                onChange={(e) => handlechangetype(e.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',


                                }} style={{ width: '150px' }}
                            >

                                <option value="">Pick your filter</option>
                                <option value={'bedrooms'}>by bedroom</option>
                                <option value={'bathrooms'}>by bathroom</option>

                            </NativeSelect>
                        </FormControl>

                    </Box>

                </div>
                <div>


                    <Box className='select' sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel className='select' variant="standard" htmlFor="uncontrolled-native" />
                            <NativeSelect
                                defaultValue={30}
                                onChange={(e) => handlechangenum(e.target.value)}
                                inputProps={{
                                    name: 'age',
                                    id: 'uncontrolled-native',


                                }} style={{ width: '150px' }}
                            >

                                <option value="">Pick the number</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>

                            </NativeSelect>
                        </FormControl>

                    </Box>


                </div>
                <div>
                    <Button className='select' value='refresh' color="tertiary" disabled={false}
                        size="small" variant="filled" style={{  color: 'antiquewhite', }}
                        onClick={handlegoback}>Go back</Button>
                </div>
            </div>

            {info && info.map((value, index) => {

                return (

                    <Properties1 key={index} value={value} favorites={favorites}
                        handleFavoriteToggle={handleFavoriteToggle} />
                )

            })}
             
        
        <div style={{width:'-webkit-fill-available'}}>
            <Button className='upper' variant="contained" endIcon={<Arrowupword/>}  onClick={(()=> window.scrollTo(0,0) )}>
                Up
            </Button></div>
            </div> 
    )
}



