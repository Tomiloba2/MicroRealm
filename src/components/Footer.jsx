import {Box,Typography} from'@mui/material'

const Footer = () => {
    return ( 
        <div className="Footer">
            <Box sx={{
                margin:'2vw 8vw',
                textAlign:'center',
                position:'relative',
                bottom:'-2vw',
                left:'3vw'
            }}>
                <Typography variant='h6'>MicroRealm</Typography>
                <Typography component='a' href='https://' color='primary'>Tomiloba2 &copy; 2022</Typography>
            </Box>
        </div>
     );
}
 
export default Footer;