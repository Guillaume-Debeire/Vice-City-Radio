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
import AudioVisualizer from "./components/AudioVisualizer";

export function App() {
  const initialRadio = radios.filter((radio) => radio.title === "Fever 105");
  const [stream, setStream] = useState<MediaStream | null>(null);

  const [radioSelected, setRadioSelected] = useState<IRadio>(initialRadio[0]);
  const [volume, setVolume] = useState<number | number[]>(100);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hiddenUI, setHiddenUI] = useState<boolean | undefined>(false);

  function randomize() {
    const newTimeValue = Math.floor(Math.random() * 1000);
    radios.forEach((radio) => {
      radio.sound.currentTime = newTimeValue;
    });
  }

  document.onmousemove = function () {
    setHiddenUI(false);
  };
  document.onmousedown = function () {
    setHiddenUI(false);
  };

  useEffect(() => {
    if (!hiddenUI) {
      setTimeout(() => {
        setHiddenUI(true);
      }, 2000);
    }
  }, [hiddenUI]);

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
        <RandomizerButton onClick={randomize}>
          <RestartAltIcon />
        </RandomizerButton>
        <ChannelSelector />
        <RadioWrapper>
          <Radio />
        </RadioWrapper>

        {radios.map((radio, key) => (
          <AudioVisualizerWrapper key={key}>
            <AudioVisualizer
              color={radio.color}
              audioElement={radio.sound}
              key={key}
            />
          </AudioVisualizerWrapper>
        ))}
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

const AudioVisualizerWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const RandomizerButton = styled.button`
  background: white;
  border-radius: 50%;

  color: #ac9308c0;
  display: flex;
  transition: all 0.4s ease-in-out;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 1rem;
  &:hover {
    border: 1px solid transparent;
    box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.4);
  }
  &:active {
    box-shadow: 1px 2px 8px 2px inset rgba(0, 0, 0, 0.4);
  }
  &:focus {
    outline: unset;
  }
`;
