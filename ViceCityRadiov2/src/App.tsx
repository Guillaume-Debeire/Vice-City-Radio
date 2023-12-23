// import plage1 from "./assets/plage1.jpg";
// import styled from "styled-components";
import "./reset.css";
import "./App.css";
import { Radio } from "./components/Radio";
import styled from "styled-components";

export function App() {
  return (
    <Wrapper>
      <Radio />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
`;
