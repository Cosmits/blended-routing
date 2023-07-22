import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
const [query, setQuery] = useSearchParams();
const [country, setCountry] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = (query) => {
  setQuery({query}) 
}

useEffect(() => {

  const queryStr = query.get("query");

  if (!queryStr) return;

  const getEuropeCountries = async () => {
    try {
      setIsLoading(true);
      const data = await fetchByRegion(queryStr);
      setCountry(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }
  getEuropeCountries();
}
  , [query])



  return (
    <Section>
      <Container>
        <Heading>CountrySearch</Heading>
        <SearchForm onSubmit={handleSubmit}/>
        {isLoading && <Loader />}
        <CountryList countries={country} />
      </Container>
    </Section>
  );
};
