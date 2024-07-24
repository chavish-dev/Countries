import { Grid, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CountryById = ()=>{
    const location = useLocation();
    const { country } = location.state || {};
    return(
        <>
         <Link to={'/'} >
            <IconButton >
            <ArrowBackIcon/>
            </IconButton>
          </Link>
          <Grid
 container
 direction="column"
 justifyContent="center"
 alignItems="center"

>

         <Typography>{ country.name}</Typography>
         <Typography>{ country.capital}</Typography>
         <img src={country.flag} style={{width:'6rem',height:'6rem'}}/>
         <Typography>
         {
            country.currencies.map((item)=>{
                return(
                    <>
                    {item.name}
                    </>
                )
            })
         }
         </Typography>
         </Grid>
        </>
    )
}
export default CountryById