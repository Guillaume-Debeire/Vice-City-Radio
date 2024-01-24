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
      <Wrapper>
        <ChannelSelector />
        <Radio />
        <RandomizerButton>
          <RestartAltIcon />
        </RandomizerButton>
      </Wrapper>
    </AppContext.Provider>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: url("vice-city-wallpaper.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1250px) {
    background: url("palmier.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const RandomizerButton = styled.button`
  border: unset;
  background-color: white;
  border: 2px solid black;
  box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
`;
