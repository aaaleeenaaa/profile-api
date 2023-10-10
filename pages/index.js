import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 0;
`;

export default function HomePage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchProfiles() {
      const response = await fetch("/api/profiles");
      const data = await response.json();
      setProfiles(data);
    }

    fetchProfiles();
  }, []);

  return (
    <>
      <h2>Profiles</h2>
      <StyledList>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link href={`/profiles/${profile.id}`}>{profile.fullName}</Link>
          </li>
        ))}
      </StyledList>
    </>
  );
}
