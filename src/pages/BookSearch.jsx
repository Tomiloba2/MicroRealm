import { useState,} from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    CircularProgress
} from '@mui/material'
import { MenuBook } from "@mui/icons-material";
import axios from 'axios'

const BookSearch = () => {
    const [searchBook,setSearchBook]=useState('')
    const [books,setBooks]=useState({items:[]})
    //fetch data
    const getBook=async()=>{
        const Access_key="AIzaSyASOSCLXevWiRD4sc692YbkxdBbfFtLgNc"
        const Url=`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`
        const response=await axios.get(Url)
       setBooks(response.data)
    }//use effect
    const submit=(e)=>{
        e.preventDefault()
        getBook()
    }
    const handleError=(data)=>{
        if(data.Response===true){
           return( 
            <Grid container spacing={1} m={3} sx={{
                position:'relative',
                top:"1vw"
            }}>
                {books.items.map((book,index)=>{
                    return(
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <img
                         src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} 
                         alt={`${book.volumeInfo.title} book`} sx={{
                            width:'50%',
                            height:'auto',
                            transition:'all ease 0.5s',
                            '&:hover':{
                                transform:'scale(1.1)'
                            }
                        }} />
                        <h2>{book.volumeInfo.title}</h2>
                        <h3>{book.volumeInfo.publishedDate} </h3>
                    </Grid>
                    )
                })}
            </Grid>
           )
        }
        else{
            return(
                <Box sx={{
                    margin:'5vw'
                }}>
                    <CircularProgress />
                </Box>
            )
        }
    }
    return ( 
        <div className="BookSearch">
            <Box     sx={{
                    textAlign:'center',
                    marginTop:{xs:'3vw',md:'-2vw'},
                    marginLeft:{xs:'-9vw',sm:'15vw', md:'7vw'},
                }}>
                    <Box>
                <Typography variant="h4" color='primary' sx={{marginLeft:{xs:'5vw',sm:' 2vw'}}} >
                     <MenuBook /> Books
                </Typography>
                <Typography variant="h5" sx={{marginLeft:{xs:'5vw',sm:' 7vw'}}}>
                    Search for relevant Books
                </Typography>
            </Box>
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItem:'center'
            }}>
                <TextField
                value={searchBook}
                onChange={e=>setSearchBook(e.target.value)}
                placeholder='search for relevant Books' 
                sx={{marginLeft:{xs:'20vw',sm:' 8vw'}}}
                />
                <Button variant='contained' sx={{marginLeft:'2vw'}}
                type='submit'
                onClick={submit}>Search</Button>
            </Box>
            <Box>
            <Grid container spacing={1} m={3} sx={{
                position:'relative',
                top:"1vw"
            }}>
                {books.items.map((book,index)=>{
                    return(
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <img
                         src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} 
                         alt={`${book.volumeInfo.title} book`} sx={{
                            width:'50%',
                            height:'auto',
                            transition:'all ease 0.5s',
                            '&:hover':{
                                transform:'scale(1.1)'
                            }
                        }} />
                        <h2>{book.volumeInfo.title}</h2>
                        <h3>{book.volumeInfo.publishedDate} </h3>
                    </Grid>
                    )
                })}
            </Grid> 
            </Box>
                </Box>
            
        </div>
     );
}
 
export default BookSearch;