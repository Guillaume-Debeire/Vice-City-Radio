import styled from "styled-components";
import { Screen } from "./Screen";
import { RadioSelector } from "./RadioSelector";

export function Radio() {
  return (
    <Wrapper>
      <Screen />
      <RadioSelector />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  top: 0;
  margin: 0 auto;
  height: 100%;
  width: 86%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 2px 2px 24px 10px rgba(0, 0, 0, 0.2);
`;
