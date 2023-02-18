import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`;

const RadioButton = styled.input`
  cursor: pointer;
  appearance: none;
  width: 25px;
  height: 25px;
  margin-right: 7px;
  background: ${props => props.background};
  border-radius: 12.5px;
  border: 1px solid ${props => props.theme.text};
  &:checked {
    &::after {
      content: "●";
      padding: 2px;
      line-height: 19px;
      font-size: 31px;
      color: ${props => props.theme.text};
    }
  }
`;

export default function StarRating ({select, setSelect, options}) {

  const handleSelectChange = event => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <Item>
      {options.map((option, index) => {return (
        <RadioButton
          key={option}
          value={option}
          type="radio"
          name="radio"
          background={`var(--gradient${index+1})`}
          onChange={event => handleSelectChange(event)}
        />
        )})
      }
    </Item>
  )
}