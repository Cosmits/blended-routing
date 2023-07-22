import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [europe, setEurope] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEuropeCountries = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setEurope(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getEuropeCountries();
  }
    , [])


  console.log("🚀 ~ file: Home.jsx:7 ~ Home ~ europe:", europe)


  return (
    <Section>
      <Container>
        <Heading>Home</Heading>
        {isLoading && <Loader />}
        <CountryList countries={europe} />
      </Container>
    </Section>
  );
};
