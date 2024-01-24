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
    radios.forEach((radio) => (radio.sound.muted = true));
    tuningSound.play();
    setTimeout(() => {
      tuningSound.pause();
      if (context?.volume) radio.sound.muted = false;
      radio.sound.volume = (context?.volume as number) / 100;
    }, 500);
  }

  useEffect(() => {
    tuningSound.load();
    tuningSound.loop = true;
    tuningSound.volume = 1;
    context?.isPlaying === true
      ? (tuningSound.muted = false)
      : (tuningSound.muted = true);
  }, []);
  return (
    <Wrapper hidden={context?.hiddenUI}>
      {radios.map((radio) => (
        <Button onClick={() => handleSelectRadio(radio)}>
          <Channel title={radio.title} imgSrc={radio.path} key={radio.title} />
        </Button>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ hidden?: boolean }>`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;
  padding: 1rem;
  width: 90%;
  height: 70vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    transition: all 0.4s ease-in-out;
    width: 5px;
    height: 8px;
    background-color: ${({ hidden }) =>
      hidden ? "transparent" : "#ac9308c0"}; /* or add it to the track */
  }

  & .channel-img {
    opacity: ${({ hidden }) => (hidden ? "0" : "1")};
    @media (max-width: 1250px) {
      opacity: 1;
    }
  }
  @media (max-width: 1250px) {
    width: 100%;
    background-color: transparent;
    padding-bottom: 100px;
  }
`;

const Button = styled.button`
  border: unset;
  background-color: transparent;
  &:focus {
    outline: unset;
  }
  .selected {
    box-shadow: 1px 2px 15px 2px rgba(0, 0, 0, 0.4);
    & .channel-title {
      color: white;
    }
    & .channel-img {
      border: 10px solid rgba(255, 255, 255);
      opacity: 1;
    }
    & .channel-wrapper {
    }
  }
`;
