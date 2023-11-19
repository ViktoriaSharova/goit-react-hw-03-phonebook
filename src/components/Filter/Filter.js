import { FilterText } from './Filter.styled';

export const Filter = ({ onSetFilter, value }) => {
  return (
    <>
      <FilterText>Find contact by name</FilterText>
      <input
        type="text"
        name="search"
        placeholder="Type name"
        value={value}
        onChange={onSetFilter}
      />
    </>
  );
};