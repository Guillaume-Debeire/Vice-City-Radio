import styled from "styled-components";
import { Screen } from "./Screen";
import { SoundController } from "./SoundController";
import { useContext, useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { radios } from "../assets/radios";

export function RadioSelector() {
  const [loading, setLoading] = useState<number>(0);

  const context = useContext(AppContext);

  function playMusic() {
    radios.forEach((radio) => {
      if (radio.title === context?.radioSelected.title) {
        radio.sound.muted = false;
        radio.sound.volume = (context?.volume as number) / 100;
      }
      radio.sound.play();
      if (context?.isPlaying) {
        radio.sound.pause();
      }
    });

    context?.setIsPlaying(!context?.isPlaying);
  }

  useEffect(() => {
    radios.forEach((radio) => {
      radio.sound.load();
      radio.sound.loop = true;
      radio.sound.muted = true;
      radio.sound.addEventListener("canplaythrough", () => {
        setLoading(loading + 1);
      });
    });
    console.log("loading", loading);
  }, []);
  return (
    <Wrapper>
      <PlayButton onClick={playMusic}>
        {loading > 0 ? (
          <div>
            {context?.isPlaying ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 0.3,
                }}
              >
                <PauseIcon />
              </motion.div>
            ) : (
              <motion.div>
                <PlayArrowIcon />
              </motion.div>
            )}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </PlayButton>
      <Screen title={context?.radioSelected.title} />
      <SoundController />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 5px solid brown;
  border-radius: 5px;
  background: transparent;
  width: 80%;
  /* height: 60%; */
  display: flex;
  justify-content: space-between;
  align-content: baseline;
  padding: 0 30px;
  flex-direction: row;
  border-radius: 50px;
  box-shadow: 1px 2px 15px 2px rgba(0, 0, 0, 0.4);

  background: url("/marbre.jpg");
  @media (max-width: 1250px) {
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
  }
`;

const PlayButton = styled.button`
  order: 1;
  background: white;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  color: black;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  &:focus {
    outline: unset;
  }
  @media (max-width: 1250px) {
    order: 2;
    margin-right: 20px;
  }
`;
