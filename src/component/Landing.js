import React,{useState, useEffect} from 'react';

// components
import Loader from './Loader';
import Coin from './Coin';

// API
import { getCoin } from '../services/api';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const fetchAPI = async () =>{
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI()
    },[]);

    const searchHandler = event => {
        setSearch(event.target.value)
    }

    const searchCoins = coins.filter(coin => coin.name.toString().toLowerCase().includes(search.toString().toLowerCase()))

    return (
        <>
            <input type="text" placeholder='Search' value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div>
                        {
                            searchCoins.map(coin => <Coin 
                                    key={coin.id}
                                    name = {coin.name}
                                    image = {coin.image}
                                    symbol = {coin.symbol}
                                    price = {coin.current_price}
                                    marketCap = {coin.market_cap}
                                    priceChange = {coin.price_change_percentage_24h}
                                />)
                        }
                    </div> :
                    <Loader />
            }
        </>
    );
};

export default Landing;