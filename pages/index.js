import { useEffect, useState } from "react";

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
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <a href={`/profiles/${profile.id}`}>{profile.fullName}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
