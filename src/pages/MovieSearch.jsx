import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";
import Search from "../components/Search";
import {Box,CircularProgress,Typography,} from '@mui/material'
import { MovieSharp } from "@mui/icons-material";
const MovieSearch = () => {
    const [searchMovies,setSearchMovies]=useState('')
    const [movies,setMovies]=useState([
       /* {
            "Title": "Starwars: Goretech",
            "Year": "2018",
            "imdbID": "tt9336300",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
        },
        {
            "Title": "MeUndies x StarWars: The Dark Side",
            "Year": "2018",
            "imdbID": "tt9414858",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
        },
        {
            "Title": "MeUndies x StarWars: The Force",
            "Year": "2018",
            "imdbID": "tt9414918",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
        },
        {
            "Title": "40 Years: StarWars & ILM",
            "Year": "2016",
            "imdbID": "tt5320598",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "The StarWars Adventures",
            "Year": "2016–",
            "imdbID": "tt5814352",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNWNkOGIyN2ItNGEwYS00ZTM2LWIyMzgtNjUxMzJmMjViZTE4XkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
        },
        {
            "Title": "The StarWars Adventures: Project Blackwing",
            "Year": "2016–",
            "imdbID": "tt5814452",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMmQyM2M3ZjItYjhiMy00YWM4LWFmZGMtNTI1NTYwYjZlOGJhXkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
        }*/
    ])
    //function to get movies
      const getMovies=async()=>{
         const Url=`http://www.omdbapi.com/?s=${searchMovies}&apikey=81967c1b`
        const response=await fetch(Url)
        const data=await response.json()
        if(data.Search){
            console.log(data.Search)
            setMovies(data.Search)
        }
    }
    // calling the useEffect hooks
    useEffect(()=>{
        getMovies(searchMovies)
    },[searchMovies])
    return ( 
        <div className="MovieSearch">
            <Box sx={{
                textAlign:'center',
                margin:{xs:'8vw 10vw',sm:"2vw 10vw"}
            }}>
                <Typography variant="h3" color='primary'><MovieSharp /> Movies</Typography>
                <Typography variant="h5" sx={{marginLeft:{xs:'5vw',sm:' 7vw'}}}>
                    Search for favourite movies
                </Typography>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItem:'center'
            }}>
                 <Search 
                 searchMovies={searchMovies} 
                 setSearchMovies={setSearchMovies} 
                 sx={{marginLeft:{xs:'20vw',sm:'15vw'}}} />
                 {/*<Button variant='contained' sx={{
                    marginLeft:'1vw'
                 }}>Search</Button>*/}
            </Box>
            <Movie movies={movies} />
        </div>
     );
}
 
export default MovieSearch;