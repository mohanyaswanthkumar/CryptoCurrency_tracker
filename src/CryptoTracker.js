import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptDisplay from './CryptDisplay';

function CryptoTracker() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
            .then(res => {
                setData(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    const addCoin = async (e) => {
        const coinName = e.target.value;
        setSearch(coinName);
        console.log(search);
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayeach=(iter)=>{
        console.log(iter);
         return <CryptDisplay de={iter} />
          //return () => <CryptDisplay de={iter} />;
    }

    return (
        <div>
            {/* Search field */}
            <div className='sbox'>
                <div>
                <input type="text" value={search} id="coinInput" placeholder="Enter a coin name" onChange={addCoin} /><br />
                <button>Search Coin</button><br />
                </div>
            </div>
            {/* Display results here */}
            <div className='results'>
            {data.length>0 && data.filter(iter=>iter.name.toLowerCase().includes(search.toLowerCase())).map((iter, id) => (
                   <div key={id} className='card' onClick={() => displayeach(iter)}>
                        <img src={iter.image} alt={crypto.name} className="rounded-circle mr-2" />
                        <p>Name: {iter.name}</p>
                        <p>ID: {iter.id}</p>
                        <p>Symbol: {iter.symbol}</p>
                        <p>Price : {iter.current_price}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default CryptoTracker;
