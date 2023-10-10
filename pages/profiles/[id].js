import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { StyledLink } from "@/components/Link";
import BackLink from "@/components/Link";

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState({
    username: "",
    fullName: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch(`/api/profile/${id}`);
      const data = await response.json();
      setProfile(data);
    }

    if (id) {
      fetchProfile();
    }
  }, [id]);

  return (
    <>
      <h2>Profile Page</h2>
      <p>Username: {profile.username}</p>
      <p>Full Name: {profile.fullName}</p>
      <p>Address: {profile.address}</p>
      <p>Email: {profile.email}</p>
      <StyledLink href={`/profiles/edit/${id}`}>Edit Profile</StyledLink>
      <StyledLink href={`/profiles/delete/${id}`}>Delete Profile</StyledLink>
      <BackLink />
    </>
  );
}
