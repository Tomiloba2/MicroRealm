import {
    Typography,Box
} from '@mui/material'

const Error = () => {
    return ( 
        <div className="Error" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Box sx={{
                textAlign:'center'
            }}>
            <Typography variant='h1' color='primary'>
                404 error
            </Typography>
            <Typography variant='h6'>
                Webpage does not exist
            </Typography>
            </Box>
        </div>
     );
}
 
export default Error;