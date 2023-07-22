import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useParams,  } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { useEffect, useState} from 'react';

export const Country = () => {
const {id} = useParams();
const [country, setCountry] = useState({});
const [isLoading, setIsLoading] = useState(false);



useEffect(() => {


  const getEuropeCountries = async () => {
    try {
      setIsLoading(true);
      const data = await fetchCountry(id);
      setCountry(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  getEuropeCountries();
}
  , [id])

  return (
    <Section>
      <Container>
      {isLoading && <Loader />}
      <GoBackBtn path ='/'>Go Back</GoBackBtn>
        <CountryInfo country ={country}/>
      </Container>
    </Section>
  );
};
