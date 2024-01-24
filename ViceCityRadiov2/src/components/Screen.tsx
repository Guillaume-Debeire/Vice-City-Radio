import { useEffect, useState } from "react";
import styled from "styled-components";

export interface ScreenProps {
  title?: string;
}
export function Screen(props: ScreenProps) {
  const [randomizedTitle, setRandomizedTitle] = useState<string | undefined>(
    "ABCDE"
  );
  function useRandomizedLetter() {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "x",
      "0",
      "1",
      "4",
    ];
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomLetter;
  }
  function useRandomizedTitle() {
    const randomTitle =
      useRandomizedLetter() +
      useRandomizedLetter() +
      useRandomizedLetter() +
      useRandomizedLetter() +
      useRandomizedLetter();
    setRandomizedTitle(randomTitle);
  }

  // let randomInterval = setInterval(useRandomizedTitle, 2);

  setTimeout(() => {
    // clearInterval(randomInterval);
    setRandomizedTitle(props.title);
  }, 500);

  return (
    <Wrapper>
      <Title>{randomizedTitle}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Ericsson GA628", sans-serif;
  width: 300px;
  margin: 1rem;
  background-color: lightgreen;
  border-radius: 5px;
  color: rgba(0, 0, 0);
  border: 1px solid black;
  box-shadow: 1px 2px 10px 1px inset rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding-left: 6px;
`;

const Title = styled.div`
  font-size: 15px;
  text-transform: uppercase;
`;
