import { Error,SongCard,Loader } from "../components";
import React from "react";
import {genres ,songs} from "../assets/constants"


const Discover = () => {
    const genreTitle = "pop";
    return(
    <div className="flex flex-col ">
        <div className="flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="text-3xl text-white text-left font-bold">Discover {genreTitle}</h2>
            <select 
                onChange={()=>{}}
                value=""
                className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
            >
                {genres.map((item) =><option key={item.value} value={item.value}> {item.title}</option> )}                
            </select>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
            {songs.map((song) => 
            <SongCard 
            key={song.i}
            src={song.pic}
            
            />)
            }

        </div>
    </div>);
}

export default Discover;
