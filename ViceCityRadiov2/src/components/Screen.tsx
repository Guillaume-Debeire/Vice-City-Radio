import { useEffect, useState } from "react";
import styled from "styled-components";

export interface ScreenProps {
  title?: string;
}
export function Screen(props: ScreenProps) {
  const [randomizedTitle, setRandomizedTitle] = useState<string | undefined>(
    "ABCDE01234"
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
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "2",
      "3",
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
      useRandomizedLetter() +
      useRandomizedLetter() +
      useRandomizedLetter() +
      useRandomizedLetter();
    setRandomizedTitle(randomTitle);
  }

  let nIntervalId: any;

  function changeTitle() {
    if (!nIntervalId) {
      nIntervalId = setInterval(useRandomizedTitle, 5);
    }
  }

  function stopTitleChange() {
    clearInterval(nIntervalId);
    // release our intervalID from the variable
    nIntervalId = null;
  }

  useEffect(() => {
    changeTitle();
    setTimeout(() => {
      stopTitleChange();
      setRandomizedTitle(props.title);
    }, 500);
  }, [props.title]);

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
  height: 40px;
  background-color: #3bb63b;
  border-radius: 5px;
  color: rgba(0, 0, 0);
  border: 1px solid black;
  box-shadow: 1px 2px 10px 1px inset rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding-left: 6px;
  order: 2;
  @media (max-width: 1250px) {
    order: 1;
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  margin: 0 auto;
`;
