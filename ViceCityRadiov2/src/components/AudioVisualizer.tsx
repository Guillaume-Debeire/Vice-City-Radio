import AudioSpectrum from "react-audio-spectrum3";
// import styled from "styled-components";

export interface AudioVisualizerProps {
  audioElement: HTMLAudioElement | undefined;
  color: string;
}
export default function AudioVisualizer(props: AudioVisualizerProps) {
  const windowWidth = window.screen.width;
  return (
    <>
      {/* <AudioControl
        id="audio-element"
        src="/music/fever-105.mp3"
        controls
        muted
      /> */}

      <AudioSpectrum
        id="audio-canvas"
        height={500}
        width={windowWidth}
        // audioId={"audio-element"}
        capColor={"white"}
        capHeight={2}
        meterWidth={10}
        meterCount={512}
        meterColor={[
          { stop: 0.5, color: props.color },
          // { stop: 1, color: "#000" },
        ]}
        gap={6}
        audioEle={props.audioElement}
      />
    </>
  );
}

// const AudioControl = styled.audio`
//   /* position: absolute; */
// `;
