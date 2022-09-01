import { TextField } from "@mui/material";

const Search = (props) => {
    return (  
        <div className="Search">
            <TextField
            placeholder="Search for your favourite...."
            value={props.searchMovies}
            onChange={(e)=>props.setSearchMovies(e.target.value)}
            sx={{
                width:{xs:'4'},
                backgroundColor:'rgba(0,0,0,0.1)',
                borderRadius:'10px'
                /*position:'relative',
                left:'30vw',
                marginTop:'1vw'*/
            }} />
        </div>
    );
}
 
export default Search;