import styled from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import ko from "date-fns/locale/ko"
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ko', ko)

const Wrapper = styled.div`
  width: 200px;
  height: 55px;
`

const CustomDatePicker = styled(DatePicker)`
  width: 100%;
  min-height: 100%;
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