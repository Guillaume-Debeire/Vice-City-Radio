import styled from "styled-components";

export function Screen() {
  return (
    <Wrapper>
      <Title>bonjour je suis le screen</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-width: 200px;
  margin: 1rem;
  height: 63px;
  background-color: lightgreen;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0);
  border: 1px solid black;
  box-shadow: 1px 2px 10px 1px inset rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 15px;
  text-transform: uppercase;
`;
