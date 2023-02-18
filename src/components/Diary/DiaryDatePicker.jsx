import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko"
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ko', ko)

const Wrapper = styled.div`
  width: 110px;
  height: 40px;
`

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  min-height: 40px;
  color: ${props => props.theme.text};
  background-color: transparent;
  font-size: 1.1rem;
  border-bottom: 1px solid ${props => props.theme.text};
  border-width: 0 0 1px 0;
  padding-left: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
    border-bottom-color: var(--blue3);
  }
`

export default function DiaryDatePicker({ startDate, setStartDate }) {
  return (
    <Wrapper>
      <CustomDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        locale="ko"
        dateFormat="yyyy/MM/dd"
      />
    </Wrapper>
  );
};