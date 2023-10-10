import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledButton } from "@/components/Button";
import styled from "styled-components";
import BackLink from "@/components/Link";
import { StyledLink } from "@/components/Link";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  padding: 1rem;
`;

const StyledSection = styled.section`
  padding: 0.5rem;
`;

export default function EditProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState({
    fullName: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    async function fetchProfile() {
      if (id) {
        const response = await fetch(`/api/profile/${id}`);
        const data = await response.json();
        setProfile(data);
      }
    }

    fetchProfile();

    return () => {
      setProfile({
        fullName: "",
        address: "",
        email: "",
      });
    };
  }, [id]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`/api/profile/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <h1>Edit Profile</h1>
      <StyledForm onSubmit={handleSubmit}>
        <StyledSection>
          <StyledLabel htmlFor="fullName">Full Name </StyledLabel>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel htmlFor="address">Address</StyledLabel>
          <input
            type="text"
            id="address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
          />
        </StyledSection>
        <StyledSection>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </StyledSection>
        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>
      <StyledLink href={`/profiles/${id}`}>Cancel</StyledLink>
      <BackLink />
    </>
  );
}
