import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  padding: 0.5rem;
`;

const StyledBackLink = styled(Link)`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
`;

export default function BackLink() {
  return <StyledBackLink href={"/"}>Back to Main Page</StyledBackLink>;
}
