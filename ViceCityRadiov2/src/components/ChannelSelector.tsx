import styled from "styled-components";
import { Channel } from "./Channel";
import { useContext, useEffect } from "react";
import { AppContext, IRadio } from "../context/AppContext";
import { radios } from "../assets/radios";

export interface ChannelSelectorProps {}

export function ChannelSelector() {
  const context = useContext(AppContext);

  const tuningSound = new Audio("/soundFX/tuning.mp3");

  function handleSelectRadio(radio: IRadio) {
    context?.setRadioSelected(radio);
    radios.forEach((radio) => (radio.sound.volume = 0));
    tuningSound.play();
    setTimeout(() => {
      tuningSound.pause();
      if (context?.volume)
        radio.sound.volume = (context?.volume as number) / 100;
    }, 500);
  }

  useEffect(() => {
    tuningSound.load();
    tuningSound.loop = true;
    tuningSound.volume = 1;
  }, []);
  return (
    <Wrapper>
      {radios.map((radio) => (
        <Button onClick={() => handleSelectRadio(radio)}>
          <Channel title={radio.title} imgSrc={radio.path} key={radio.title} />
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  width: 90%;
  height: 70vh;
  overflow-y: auto;
`;

const Button = styled.button`
  border: unset;
  background-color: transparent;
  &:focus {
    outline: unset;
  }
  .selected {
    & .channel-title {
      color: white;
    }
    & .channel-img {
      border: 10px solid rgba(255, 255, 255);
      opacity: 1;
    }
  }
`;
