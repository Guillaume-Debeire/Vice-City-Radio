import styled from "styled-components";
import { RadioSelector } from "./RadioSelector";

export function Radio() {
  return (
    <Wrapper>
      <RadioSelector />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 100px;
  top: 88px;
  left: 170px;
  border-radius: 10px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 1250px) {
    width: 100vw;
    height: 200px;
    border-radius: 0;
    padding-bottom: 0;
  }
`;
