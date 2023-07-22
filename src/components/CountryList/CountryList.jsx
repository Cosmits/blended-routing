import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries?.length > 0 && countries.map(el => {
        return (<GridItem key={el.id}>
          <Link to={`${routes.COUNTRY}/${el.id}`} > <img src={el.flag} alt={el.country} /> </Link>
        </GridItem>)
      })}
    </Grid>
  );

};
