import React, { useEffect, useState, setMovie  } from 'react'
import axios from '../../utils/axios';
import requestes from '../../utils/requestes';
import './banner.css'


const Banner = () => {
        const [movie, setMovie] = useState({});
        useEffect(() => {
            (async () => {
                try {
                    const request = await axios.get(requestes.fetchNetflixOriginals)
                    setMovie(request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]);
                } catch (error) {
                    console.log('error', error);
                }
            })()
        },[]);
    return (
        <div
            className='banner'
            style= {{
                backgroundSize: 'cover',
                backgroundImage: `url('https://immage.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                backgroundPosition: "center",
                backgroundRepeat: "no_repeat"
            }}
        >
            <div className='banner_contents'>
                <h1 className='="banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button play'>play</button>
                    <button className='banner_button'>My list</button>
                </div>
                {/* <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1> */}
            </div>
            <div className='banner_fadeboottom'/>
        </div>
            
            
    )
}

export default Banner
