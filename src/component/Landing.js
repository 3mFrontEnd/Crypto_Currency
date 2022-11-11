import React,{useState, useEffect} from 'react';

// API
import { getCoin } from '../services/api';

const Landing = () => {

    useEffect(() => {
        const feachAPI = async () =>{
            const data = await getCoin();
            console.log(data)
        }

        feachAPI()
    },[]);

    return (
        <div>
            Landing
        </div>
    );
};

export default Landing;