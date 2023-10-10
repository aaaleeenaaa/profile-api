import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Delete Profile</h1>
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
          <button onClick={handleConfirmPassword}>Confirm Password</button>
          {passwordConfirmed && (
            <button onClick={handleDelete}>Confirm Deletion</button>
          )}
          <Link href={`/profiles/${id}`}>Cancel</Link>
        </>
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
}
