import { useState,useEffect } from "react";
import {Box,Grid,Typography,TextField} from '@mui/material'
import { PhotoCamera } from "@mui/icons-material";

const Image = () => {
    const [searchImage,setSearchImage]=useState('')
    const [images,setImages]=useState([])
    //fetch data
    //use effect
    useEffect(()=>{
        const getImage=async()=>{
            const Access_key="0zcR7hvM22q_M0-NNM8LKe0xH2WANa31A7FGhZrHN2k"
            const Url=`https://api.unsplash.com/search/photos?page=2&query=${searchImage}&client_id=${Access_key}&per_page=20`
            const response=await fetch(Url)
            const data=await response.json()
            const resultj=data.results
           setImages(resultj)
        }
        getImage(searchImage)
    },[searchImage])
    /*const submit=()=>{
        getImage()
    }*/
    return ( 
        <div className="Image">
            <Box     sx={{
                    textAlign:'center',
                    marginTop:{xs:'3vw',md:'-2vw'},
                    marginLeft:{xs:'-9vw',sm:'15vw', md:'10vw'},
                }}>
                    <Box>
                <Typography variant="h4" color='primary' sx={{marginLeft:{xs:'5vw',sm:' 2vw'}}} > <PhotoCamera /> Images</Typography>
                <Typography variant="h5" sx={{marginLeft:{xs:'5vw',sm:' 7vw'}}}>Search for relevant Images and Photos</Typography>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItem:'center'
            }}>
                <TextField
                value={searchImage}
                onChange={e=>setSearchImage(e.target.value)}
                placeholder='search for relevant images' 
                sx={{marginLeft:{xs:'20vw',sm:' 8vw'}}}
                />
            </Box>
            <Box>
                 <Grid container spacing={1} sx={{
                    position:'relative',
                    top:"1vw"
                }}>
                    {images.map((val)=>{
                        return(
                        <Grid item xs={8} sm={8} md={6}>
                            <img key={val.id} src={val.urls.small} alt='val.alt_description' sx={{
                                width:'50%',
                                height:'auto',
                                transition:'all ease 0.5',
                                '&:hover':{
                                    transform:'scale(1.1)'
                                }
                            }} />
                        </Grid>
                        )
                    })}
                </Grid>

            </Box>
                </Box>
            
        </div>
     );
}
 
export default Image;