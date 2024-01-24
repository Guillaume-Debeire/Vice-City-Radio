import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

export interface ChannelProps {
  title: string;
  imgSrc: string;
}
export function Channel(props: ChannelProps) {
  const context = useContext(AppContext);
  return (
    <Wrapper
      className={`channel-wrapper ${
        context?.radioSelected.title === props.title && " selected"
      }`}
    >
      {/* {context?.radioSelected.title === props.title && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.3,
          }}
          style={{ width: "100%" }}
        >
          <Title className="channel-title">{props.title}</Title>
        </motion.div>
      )} */}
      <ImgRadio className="channel-img" src={props.imgSrc} alt="image" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  clip-path: margin-box;
  position: relative;
  z-index: 10;
  &:hover {
    transform: scale(1.05);
    & .channel-title {
      color: white;
    }
    & .channel-img {
      opacity: 1;
    }
  }
  &:active {
    transform: scale(0.95);
  }
`;

// const Title = styled.h1`
//   font-family: "Ericsson GA628", sans-serif;
//   transition: all 0.4s ease-in-out;
//   position: absolute;
//   bottom: 10px;
//   width: calc(100% - 20px);
//   border-radius: 0 0 10px 10px;
//   color: black;
//   z-index: 200;
//   font-size: 45px;
//   box-shadow: 1px 2px 15px 4px inset rgba(0, 0, 0, 0.8);
//   text-transform: uppercase;
//   &:hover {
//     color: white;
//   }
//   @media (max-width: 1250px) {
//     font-size: 30px;
//   }
// `;

const ImgRadio = styled.img`
  border: 10px solid transparent;
  width: 350px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  border-radius: 20px;
  @media (max-width: 1250px) {
    width: 300px;
    opacity: 1;
  }
`;
