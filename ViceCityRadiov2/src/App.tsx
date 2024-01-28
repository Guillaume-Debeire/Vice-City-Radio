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
import { AnimatePresence, motion } from "framer-motion";

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

  let windowith = window.innerWidth;

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
      <Wrapper background={radioSelected.secondColor}>
        <RandomizerButton onClick={randomize}>
          <RestartAltIcon />
        </RandomizerButton>
        <ChannelSelector />
        <RadioWrapper>
          <Radio />
        </RadioWrapper>

        {windowith > 1250 &&
          radios.map((radio, key) => (
            <AudioVisualizerWrapper key={key}>
              <AudioVisualizer
                color={radio.color}
                audioElement={radio.sound}
                key={key}
              />
            </AudioVisualizerWrapper>
          ))}
        <AnimatePresence>
          {radioSelected && (
            <RadioCharacter
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              src={radioSelected.background}
              key={radioSelected.background}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
            />
          )}
        </AnimatePresence>
        <Chopper
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          src="decor/chopper.png"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        />
        <City src="decor/city.png" />
        <Sea src="decor/sea.png" />
        <Sun />
        <Moon />
        <Cloud1
          initial={{ x: -600, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -600, opacity: 0 }}
          src="decor/cloud1.png"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        />
        <Cloud2
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          src="decor/cloud2.png"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        />
        <Cloud3
          initial={{ x: -800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -400, opacity: 0 }}
          src="decor/cloud3.png"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        />
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
  /* background: linear-gradient(${({ background }) =>
    background}, transparent); */
  /* background-repeat: no-repeat;
  background-size: cover; */
  gap: 0;

  background: #83e6ff;
  align-items: center;
  justify-content: center;
  animation: 30s ease-in-out 0s infinite alternate sky;
  animation-delay: 4s;
  @keyframes sky {
    from {
      /* pushes the sun down past the viewport */
      background: #83e6ff;
    }
    to {
      /* returns the sun to its default position */
      background: #0d2941c7;
    }
  }
  @media (max-width: 1250px) {
    gap: 0;
    background-position: center;
  }
`;

const RadioCharacter = styled(motion.img)`
  height: 600px;
  position: absolute;
  left: 00rem;
  bottom: 0;
  z-index: 8;
`;

const Chopper = styled(motion.img)`
  position: absolute;
  width: 400px;
  top: 10rem;
  right: 5rem;
  z-index: 4;
  animation: 30s ease-in-out 0s infinite alternate chopper;
  @keyframes chopper {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(-100vh, -10vh);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(0, 0);
    }
  }
`;

const Sun = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  background: white;
  border-radius: 50%;
  top: 0;
  transition: all 0.2s ease-in-out;
  right: 0;
  animation: 60s linear 0s infinite sun-rise;
  z-index: 2;
  @keyframes sun-rise {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(5vw, -0vh) scale(1);
      box-shadow: 0 0 600px 100px rgba(255, 238, 0, 0.712);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(-220vw, 60vh) scale(1.6);
      box-shadow: 0 0 1000px 300px rgba(255, 123, 0, 0.932);
    }
  }
`;
const Moon = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  background: white;
  border-radius: 50%;
  top: -10rem;
  right: -10rem;
  z-index: 2;
  box-shadow: 0 0 100px 20px rgba(0, 0, 0, 0.712);
  animation: 60s linear 0s infinite moon-rise;
  z-index: 3;
  @keyframes moon-rise {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(100vw, 26vh) scale(1);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(-120vw, 20vh) scale(1.4);
    }
  }
`;

const Cloud1 = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  animation: 30s ease-in-out 0s infinite cloud1-rise;
  z-index: 3;
  @keyframes cloud1-rise {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(-10vw, 6vh);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(10vw, 10vh);
    }
  }
`;
const Cloud2 = styled(motion.img)`
  position: absolute;
  top: 0;
  right: 30rem;
  width: 700px;
  animation: 60s ease-in-out 0s infinite alternate cloud2-rise;
  z-index: 3;
  @keyframes cloud2-rise {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(-10vw, 6vh);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(10vw, 10vh);
    }
  }
`;
const Cloud3 = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 20rem;
  width: 400px;
  animation: 60s ease-in-out 0s infinite alternate cloud3-rise;
  z-index: 3;
  @keyframes cloud3-rise {
    from {
      /* pushes the sun down past the viewport */
      transform: translate(-10vw, 6vh);
    }
    to {
      /* returns the sun to its default position */
      transform: translate(10vw, 10vh);
    }
  }
`;

const City = styled.img`
  width: 100vw;
  position: absolute;
  left: 0;
  top: 15rem;
  z-index: 3;
`;

const Sea = styled.img`
  width: 100vw;
  position: absolute;
  left: 0;
  bottom: -5rem;
  z-index: 2;
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
  top: 0;
  transform: rotate(180deg);
  left: 0;
  z-index: 3;
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
  z-index: 10;
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
