import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`;

const RadioButton = styled.input`
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background: yellowgreen;
  border: 2px solid yellowgreen;
  &:checked + ${Item} {
    border: 2px solid yellowgreen;
  }
`;

export default function StarRating ({select, setSelect, options}) {

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <Item>
      {options.map(option => {return (
        <RadioButton
          key={option}
          value={option}
          type="radio"
          name="radio"
          onChange={event => handleSelectChange(event)}
        />
        )})
      }
    </Item>
  )
}