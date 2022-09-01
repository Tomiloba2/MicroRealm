import {Container,
     Grid,
     Card,
     CardMedia,
     CardHeader,
     CardContent,
     IconButton,
     Avatar,
     CircularProgress,
     Box
} from "@mui/material"
import {MoreVert} from '@mui/icons-material'

const Movie = (props) => {
    const handleError=(data)=>{
        if(data.Response===true){
            return(
            <Grid container >
            {props.movies.map((movie,index)=>{
                return (
                    <Grid item xs={12} sm={12} md={5} key={index} sx={{
                        margin:{xs:'1vw 1vw',sm:'1vw 5vw 1vw 15vw',md:'1vw 0vw 1vw 5vw'}
                    }}>
                    <Container>
                    <Card sx={{
                        borderRadius:'4vw',
                        boxShadow:'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                        transition:'all ease 0.5s',
                        '&:hover':{
                            backgroundColor:'teal',
                            transform:'scale(1.1)'
                        }
                        
                    }}>
                       <div className="container">
                           <CardHeader>
                                action={
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                }
                                avatar={
                                    <Avatar>M</Avatar>
                                }
                           </CardHeader>
                           <CardMedia component='img' src={movie.Poster} alt='movies'/>
                           <CardContent>
                                <h1>Title:{movie.Title}</h1>
                                <h3>Year:{movie.Year}</h3> 
                           </CardContent> 
                </div>
                </Card>
            </Container>  
            </Grid>  
                )
            })}
            </Grid>
            )
        }else{
            return(
                <Box sx={{
                    margin:'5vw 40vw'
                }}>
                    <CircularProgress />
                </Box>
            )
        }
    }
    return ( 
        <div className="Movie">
            <Grid container >
            {props.movies.map((movie,index)=>{
                return (
                    <Grid item xs={12} sm={12} md={5} key={index} sx={{
                        margin:{xs:'1vw 1vw',sm:'1vw 5vw 1vw 15vw',md:'1vw 0vw 1vw 5vw'}
                    }}>
                    <Container>
                    <Card sx={{
                        borderRadius:'4vw',
                        boxShadow:'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                        transition:'all ease 0.5s',
                        '&:hover':{
                            backgroundColor:'teal',
                            transform:'scale(1.1)'
                        }
                        
                    }}>
                       <div className="container">
                           <CardHeader>
                                action={
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                }
                                avatar={
                                    <Avatar>M</Avatar>
                                }
                           </CardHeader>
                           <CardMedia component='img' src={movie.Poster} alt='movies'/>
                           <CardContent>
                                <h1>Title:{movie.Title}</h1>
                                <h3>Year:{movie.Year}</h3> 
                           </CardContent> 
                </div>
                </Card>
            </Container>  
            </Grid>  
                )
            })}
            </Grid>
       </div>
     );
 }
  
 export default Movie;