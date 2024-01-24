// import plage1 from "./assets/plage1.jpg";
// import styled from "styled-components";
import "./reset.css";
import "./App.css";
import { Radio } from "./components/Radio";
import styled from "styled-components";
import { ChannelSelector } from "./components/ChannelSelector";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { AppContext, IRadio } from "./context/AppContext";
import { useState } from "react";
import { radios } from "./assets/radios";

export function App() {
  const initialRadio = radios.filter((radio) => radio.title === "Fever 105");

  const [radioSelected, setRadioSelected] = useState<IRadio>(initialRadio[0]);
  const [volume, setVolume] = useState<number | number[]>(100);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  function randomize() {
    console.log("je randomize");
    const newTimeValue = Math.floor(Math.random() * 1000);
    radios.forEach((radio) => {
      radio.sound.currentTime = newTimeValue;
    });
  }
  return (
    <AppContext.Provider
      value={{
        radioSelected,
        setRadioSelected,
        volume,
        setVolume,
        isPlaying,
        setIsPlaying,
      }}
    >
      <Wrapper background={radioSelected.path}>
        <RandomizerButton onClick={randomize}>
          <RestartAltIcon />
        </RandomizerButton>
        <ChannelSelector />
        <RadioWrapper>
          <Radio />
        </RadioWrapper>
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div<{ background: string }>`
  transition: all 0.4s ease-in-out;
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;

  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 1250px) {
    gap: 0;
    background-position: center;
  }
`;

const RadioWrapper = styled.div`
  width: 100%;
  height: 30vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 3rem;
  background: linear-gradient(transparent, white);
  @media (max-width: 1250px) {
    /* height: 50vh; */
    padding-bottom: 0;
    background: linear-gradient(transparent, white 70%);
  }
`;

const RandomizerButton = styled.button`
  border: unset;
  background-color: #fffdda;
  box-shadow: 0 0 9px 1px rgba(255, 251, 18, 0.4);
  border-radius: 50%;
  color: black;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: unset;
  }
  &:active {
    transform: scale(0.9);
  }
`;
