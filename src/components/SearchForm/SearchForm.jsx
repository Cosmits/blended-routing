import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useEffect, useState } from 'react';
import { Loader } from 'components';
import { fetchListRegion } from 'service/country-service';

// const regions = [
//   { id: 'africa', value: 'africa', name: 'Africa' },
//   { id: 'america', value: 'america', name: 'America' },
//   { id: 'asia', value: 'asia', name: 'Asia' },
//   { id: 'europe', value: 'europe', name: 'Europe' },
//   { id: 'oceania', value: 'oceania', name: 'Oceania' },
// ];

export const SearchForm = ({ onSubmit }) => {

  const [regions, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const getListRegion = async () => {
      try {
        setIsLoading(true);
        const data = await fetchListRegion();
        setRegions(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getListRegion();
  }
    , [])

  const submit = (event) => {
    event.preventDefault();
    onSubmit(event.target.elements.region.value);
  }

  return (
    <SearchFormStyled onSubmit={submit} >
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required>
        <option selected disabled defaultValue="">
          Select a region and press enter
        </option>
        {regions?.length > 0 &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
      {isLoading && <Loader />}
    </SearchFormStyled>
  );
};
