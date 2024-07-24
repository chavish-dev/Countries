import { useEffect, useState } from "react"
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Countries = () => {

    const [countriesList, setCountriesList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [countryData, setCountryData] = useState(null);

    const getAllCountries = async () => {
        try {
            const response = await axios.get('https://localhost:44360/api/Countries');

            if (response.status === 200) {
                setCountriesList(response.data);
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getAllCountries()
    }, [])
    useEffect(() => {
        const findCountryByName = (name) => {
            return countriesList.find(country => country.name === name);
        };

        const country = findCountryByName(selectedCountry);
        setCountryData(country);
    }, [selectedCountry])
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={countriesList}
                    getOptionLabel={(option) => option.name}
                    sx={{ width: 300 }}
                    onChange={(e) => setSelectedCountry(e.target.innerText)}
                    renderInput={(params) => <TextField  {...params} label="Countries" />}
                />
                {countryData &&
                    <>
                        <Typography>
                            <Link to={`/${countryData.name}`} state={{ country: countryData }}> {countryData.name}</Link>

                        </Typography>
                        <Typography>{countryData.capital}</Typography>
                        <img src={countryData.flag} style={{ width: '6rem', height: '6rem' }} />
                    </>
                }
            </Grid>
        </>
    )
}
export default Countries