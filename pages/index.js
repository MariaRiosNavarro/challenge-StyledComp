import BoxWithStyledComponents from "../components/BoxWithStyledComponents/BoxWithStyledComponents";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <FlexRowStyledDiv>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents variant="black" />
    </FlexRowStyledDiv>
  );
}

const FlexRowStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
