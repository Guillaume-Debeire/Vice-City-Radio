import styled from "styled-components";

export interface RadioSelectorProps {}

export function RadioSelector(props: RadioSelectorProps) {
  return (
    <Wrapper>
      <p>Bonjour je suis le RadioSelector</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  height: 70vh;
  background: transparent;
`;
