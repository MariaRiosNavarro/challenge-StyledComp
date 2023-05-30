import styled from "styled-components";

export default function BoxWithStyledComponents({ variant }) {
  return <StyledDiv variant={variant}></StyledDiv>;
}

const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${(props) => {
    if (props.variant === "black") {
      return css`
        background-color: black;
      `;
    }
  }}
`;
