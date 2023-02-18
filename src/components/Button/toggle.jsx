import styled from "styled-components";

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 27px;
`

const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--lightgray5);
  border-radius: 17px;
  -webkit-transition: .4s;
  transition: .4s;
  cursor: pointer;
  &:before {
    position: absolute;
    content: "";
    height: 17px;
    width: 16px;
    border-radius: 10px;
    left: 7px;
    bottom: 5px;
    background-color: ${props => props.theme.bg};
    -webkit-transition: .4s;
    transition: .4s;
  }
`

const Circle = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    background-color: #2196F3;
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + ${Slider}:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
`


export default function Toggle({checked, onChange}) {
  return (
    <SwitchContainer>
      <Circle type="checkbox" checked={checked} onChange={onChange}/>
      <Slider />
    </SwitchContainer>
  )
}