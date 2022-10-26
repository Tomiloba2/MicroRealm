import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardHeader,
    CardActions,
    Button,
    IconButton,
    ImageList,
    ImageListItem
} from '@mui/material'
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="Home">
            <Box sx={{
                width: { xs: '100%', sm: '80%' },
                height: { xs: '40vh', sm: '30vh', md: '20vh' },
                textAlign: 'center',
                paddingTop: '5vh',
                borderRadius: "10%",
                marginTop: { xs: '3vw', md: '-2vw' },
                marginLeft: { xs: '1vw', sm: '19vw', md: "15vw" },
                marginBottom: { xs: '10vw', sm: "2vw" },
                boxShadow: 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                //background:'whitesmoke'

            }}><Box>
                    <Typography variant='h4'
                        color='primary'
                        sx={{ fontFamily: 'algerian', marginLeft: '5vw' }}>
                        MicroRealm
                    </Typography>
                    <Typography variant='h5'
                        sx={{ margin: { xs: '1vw 5vw', sm: '0.5vw 5vw' } }}>
                        Your mini_Realm of books, images and movies
                    </Typography>
                    <Typography sx={{
                        margin: '0.5vw 4vw',
                        padding: '0 5vw',
                        fontStyle: 'italic'
                    }}>
                        Search and browse through our collection of books,Movies and images
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={2} sx={{
                    margin: { sm: '5vw 2vw 5vw 15vw', md: "4vw 2vw 4vw 6vw" }
                }}>
                    <Grid item xs={12} sm={10} md={6}>
                        <Card sx={{
                            borderRadius: '1vw',
                            boxShadow: 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                            transition: 'all ease 0.5s',
                            "&:hover": {
                                background: 'blue'
                            }
                        }}>
                            <CardMedia component='img'
                                src='https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJhY3VsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='poster' />
                            <CardHeader
                                action={
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                }
                                title="Favorite Movies"
                                subheader='Browse through our collection of movies' />
                            <CardContent>
                                <ImageList cols={3} rowHeight={100}>
                                    <ImageListItem>
                                        <img src="https://images.unsplash.com/photo-1533613220915-609f661a6fe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZlbmdlcnMlMjBpbmZpbml0eSUyMHdhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://images.unsplash.com/photo-1605092262243-28c74cfc74c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2ZW5nZXJzJTIwaW5maW5pdHklMjB3YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://images.unsplash.com/photo-1584445584435-98136cadf4f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2ZW5nZXJzJTIwaW5maW5pdHklMjB3YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="poster" />
                                    </ImageListItem>
                                </ImageList>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' color='error' sx={{
                                    margin: "0 30%",
                                    '&:hover': {
                                        width: "10vw",
                                        borderRadius: '2vw'
                                    }
                                }}>
                                    <Link to='/movie'>
                                        Browse
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={10} md={6}>
                        <Card sx={{
                            borderRadius: '1vw',
                            boxShadow: 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                            transition: 'all ease 0.5s',
                            "&:hover": {
                                backgroundColor: 'blue'
                            }
                        }}>
                            <CardMedia component='img' src='https://media.istockphoto.com/photos/friends-in-the-cinema-picture-id1180701083?b=1&k=20&m=1180701083&s=170667a&w=0&h=i4RjlXSocbLiBpruz5KQY4wUlHZ9WX8bAVIMGf1qclw=' alt='poster' />
                            <CardHeader
                                action={
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                }
                                title="Favorite Images"
                                subheader='Browse through our collection of Images' />
                            <CardContent>
                                <ImageList cols={3} rowHeight={100}>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?b=1&k=20&m=1191001701&s=170667a&w=0&h=uVqDpnXNtnfbhB-F4sWac_t3oL_YSrDuHeCKdaJGS3U=" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/empty-red-armchairs-of-a-theater-ready-for-a-show-picture-id1295114854?b=1&k=20&m=1295114854&s=170667a&w=0&h=W9ZbN674554Jsamxo5AfoO3DrSm_7qYS1EnANgusi9o=" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/happy-latin-american-couple-at-the-movies-picture-id688782978?b=1&k=20&m=688782978&s=170667a&w=0&h=2TNk6GvMF4I92-nl3IWMRQVsoPWQcTKdlZR0sUVQwG4=" alt="poster" />
                                    </ImageListItem>
                                </ImageList>
                            </CardContent>
                            <CardActions>
                                <Button component='a' href='/image' variant='contained' color='error' sx={{
                                    margin: "0 30%",
                                    '&:hover': {
                                        width: "10vw",
                                        borderRadius: '2vw'
                                    }
                                }}>
                                    <Link to='/image'>Browse</Link>
                                </Button>
                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item xs={12} sm={10} md={6}>
                        <Card sx={{
                            borderRadius: '1vw',
                            boxShadow: 'inset 2px 2px 5px #babecc,inset -5px -5px 10px #fffff7',
                            transition: 'all ease 0.5s',
                            "&:hover": {
                                backgroundColor: 'blue'
                            }
                        }}>
                            <CardMedia component='img' src='https://media.istockphoto.com/photos/read-this-book-you-wont-regret-it-picture-id1334220585?b=1&k=20&m=1334220585&s=170667a&w=0&h=E812KKzLrFhiAGjHAakbOmc_Lrs_leRRBMQDcNIcreg=' alt='poster' />
                            <CardHeader
                                action={
                                    <IconButton>
                                        <MoreVert />
                                    </IconButton>
                                }
                                title="Favorite Books"
                                subheader='Browse through our collection of Books' />
                            <CardContent>
                                <ImageList cols={3} rowHeight={100}>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/books-on-display-in-the-corner-of-a-second-hand-bookstore-picture-id1129874863?b=1&k=20&m=1129874863&s=170667a&w=0&h=FTGHLcHTwhBCwYVQ-P4pJgrkIbwK0Kh94aYOUxTBRmg=" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/young-gorgeous-female-student-standing-next-to-book-shelves-and-for-picture-id1278721683?b=1&k=20&m=1278721683&s=170667a&w=0&h=ZLm6elGCVjGPoRHM2WZv7trsa2twzYRSY_Xr_KOICj0=" alt="poster" />
                                    </ImageListItem>
                                    <ImageListItem>
                                        <img src="https://media.istockphoto.com/photos/female-student-searching-for-books-in-the-book-store-picture-id1149119293?b=1&k=20&m=1149119293&s=170667a&w=0&h=n-r6pkzNSD9eSn_D1QM54gsgMHkHK-pOGdOqg8LlWis=" alt="poster" />
                                    </ImageListItem>
                                </ImageList>
                            </CardContent>
                            <CardActions>
                                <Button component='a' href='/book' variant='contained' color='error' sx={{
                                    margin: "0 30%",
                                    '&:hover': {
                                        width: "10vw",
                                        borderRadius: '2vw'
                                    }
                                }}>
                                    <Link to='/book'>Browse</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;