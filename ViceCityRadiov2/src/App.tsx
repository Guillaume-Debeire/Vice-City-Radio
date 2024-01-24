// import plage1 from "./assets/plage1.jpg";
// import styled from "styled-components";
import "./reset.css";
import "./App.css";
import { Radio } from "./components/Radio";
import styled from "styled-components";
import { ChannelSelector } from "./components/ChannelSelector";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { AppContext, IRadio } from "./context/AppContext";
import { useEffect, useState } from "react";
import { radios } from "./assets/radios";

export function App() {
  const initialRadio = radios.filter((radio) => radio.title === "Fever 105");
  const [stream, setStream] = useState<MediaStream | null>(null);

  const [radioSelected, setRadioSelected] = useState<IRadio>(initialRadio[0]);
  const [volume, setVolume] = useState<number | number[]>(100);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hiddenUI, setHiddenUI] = useState<boolean>(false);

  function randomize() {
    console.log("je randomize");
    const newTimeValue = Math.floor(Math.random() * 1000);
    radios.forEach((radio) => {
      radio.sound.currentTime = newTimeValue;
    });
  }

  let timeout: number;
  document.onmousemove = function () {
    setHiddenUI(false);
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      setHiddenUI(true);
    }, 2500);
  };

  return (
    <AppContext.Provider
      value={{
        radioSelected,
        setRadioSelected,
        volume,
        setVolume,
        isPlaying,
        setIsPlaying,
        hiddenUI,
        setHiddenUI,
        stream,
        setStream,
      }}
    >
      <Wrapper background={radioSelected.path}>
        <RandomizerButton onClick={randomize} hiddens={hiddenUI}>
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
  transition: all 0.4s ease-in-out;
  height: 100vh;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 0;

  align-items: center;
  justify-content: center;
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
    position: absolute;
    bottom: 0;
    padding-bottom: 0;
    background: linear-gradient(transparent, white 70%);
  }
`;

const RandomizerButton = styled.button<{ hiddens?: boolean }>`
  border: unset;
  background-color: #fffdda;
  box-shadow: 0 0 9px 1px rgba(255, 251, 18, 0.4);
  border-radius: 50%;
  width: 50px;
  color: black;
  transition: all 0.3s ease-in-out;
  margin: 1rem 0;
  opacity: ${({ hidden }) => (hidden ? "0.1" : "1")};
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
