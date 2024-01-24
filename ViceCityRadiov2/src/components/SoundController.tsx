import { Box, Slider, Stack } from "@mui/material";
import styled from "styled-components";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { radios } from "../assets/radios";
// import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

// export interface SoundControllerProps {
//   value: number | number[];
//   setSoundLevel: React.Dispatch<React.SetStateAction<number | number[]>>;
// }

export function SoundController() {
  const context = useContext(AppContext);

  function handleChange(_e: Event, value: number | number[]) {
    context?.setVolume(value);
    radios.forEach((radio) => {
      if (radio.title === context?.radioSelected.title) {
        radio.sound.volume = (context?.volume as number) / 100;
      }
    });
  }

  return (
    <Wrapper>
      <AnimatePresence>
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} direction="row" alignItems="center">
            {(context?.volume as number) > 50 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                exit={{ scale: 0 }}
              >
                <VolumeUp />
              </motion.div>
            ) : (
              <VolumeDown />
            )}
            <Slider
              aria-label="Volume"
              value={context?.volume}
              onChange={handleChange}
              color="warning"
            />
          </Stack>
        </Box>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: black;
  order: 3;

  .css-1aafxkz-MuiSlider-root {
    color: #532600;
  }
  .css-xost53-MuiSlider-thumb {
    box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.7);
  }
`;
