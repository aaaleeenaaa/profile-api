import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

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
    <div>
      <h1>Profile Page</h1>
      <p>Username: {profile.username}</p>
      <p>Full Name: {profile.fullName}</p>
      <p>Address: {profile.address}</p>
      <p>Email: {profile.email}</p>
      <Link href={`/profiles/edit/${id}`}>Edit Profile</Link>
      <Link href={`/profiles/delete/${id}`}>Delete Profile</Link>
    </div>
  );
}
