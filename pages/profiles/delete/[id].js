import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledButton } from "@/components/Button";
import { StyledLink } from "@/components/Link";
import styled from "styled-components";
import BackLink from "@/components/Link";

const StyledDeletion = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function DeleteProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(`/api/profile/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    }

    if (id) {
      fetchProfile();
    }

    return () => {
      setPasswordConfirmed(false);
    };
  }, [id]);

  async function handleDelete() {
    if (passwordConfirmed) {
      const response = await fetch(`/api/profile/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.push("/");
      }
    }
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const confirmPassword = "ProfileDeletion";

  function handleConfirmPassword() {
    if (password === confirmPassword) {
      setPasswordConfirmed(true);
    }
  }

  return (
    <>
      <StyledDeletion>
        <h2>Delete Profile</h2>
        {profile ? (
          <>
            <p>Do you really want to delete this profile?</p>
            <p>Username: {profile.username}</p>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <StyledButton onClick={handleConfirmPassword}>
              Confirm Password
            </StyledButton>
            {passwordConfirmed && (
              <StyledButton onClick={handleDelete}>
                Confirm Deletion
              </StyledButton>
            )}
            <StyledLink href={`/profiles/${id}`}>Cancel</StyledLink>
          </>
        ) : (
          <p>Profile not found</p>
        )}
      </StyledDeletion>
      <BackLink />
    </>
  );
}
