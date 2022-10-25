import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import BookSearch from './pages/BookSearch';
import Image from './pages/Image';
import MovieSearch from './pages/MovieSearch';
import Layout from './pages/Layout';
import Nav from './pages/Nav';
import Footer from './components/Footer';
import Error from './pages/Error';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('dark')
  const darkTheme=createTheme ({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
    <div className="App">
      <Stack direction='column' bgcolor={'background.default'} color={'text.primary'} sx={{
        minWidth:'100vw',
        minHeight:'100vh'
      }}>
      <Nav setMode={setMode} mode={mode}/>
        <Routes>
          <Route path='/' element={<Layout setMode={setMode} mode={mode}/>}>
              <Route index element={<Home/>} />
              <Route path='image' element={<Image/>} />
              <Route path='movie' element={<MovieSearch/>} />
              <Route path='book' element={<BookSearch/>} />
              <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      <Footer/>
      </Stack>
    </div>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
