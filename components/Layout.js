import styled from "styled-components";
import Head from "next/head";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 2em;
  font-weight: bold;
  color: #63ad4c;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
`;

const StyledMain = styled.main`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Customer Profile API</title>
      </Head>
      <StyledHeader>
        <h1>Customer Profile API</h1>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </>
  );
}
