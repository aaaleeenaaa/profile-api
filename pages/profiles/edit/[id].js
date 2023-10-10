import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profile.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
