import { useEffect } from "react";
import { useState } from "react";
import Movie from "../components/Movie";
import Search from "../components/Search";
import {Box,Typography,} from '@mui/material'
import { MovieSharp } from "@mui/icons-material";
const MovieSearch = () => {
    const [searchMovies,setSearchMovies]=useState('')
    const [movies,setMovies]=useState([])
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