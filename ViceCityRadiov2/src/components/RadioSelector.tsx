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
      radio.sound.volume = 0;
      radio.sound.addEventListener("canplaythrough", () => {
        setLoading(loading + 1);
      });
    });
    console.log("loading", loading);
  }, []);

  return (
    <Wrapper>
      <PlayButton onClick={playMusic}>
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
      </PlayButton>
      <Screen title={context?.radioSelected.title} />
      <SoundController />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  background: transparent;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  flex-direction: row;
  border-radius: 50px;
  background-color: lightgrey;
`;

const PlayButton = styled.button`
  background: transparent;
  color: black;
  border: unset;
  &:focus {
    outline: unset;
  }
`;
