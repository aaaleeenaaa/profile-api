let profiles = [
  {
    id: 1,
    username: "user1",
    fullName: "John Doe",
    address: "123 Main St, City",
    email: "john@example.com",
  },
  {
    id: 2,
    username: "user2",
    fullName: "Jane Doe",
    address: "123 Street, City2",
    email: "jane@example.com",
  },
  {
    id: 3,
    username: "user3",
    fullName: "Max Mustermann",
    address: "Straße 123, Stadt",
    email: "max@beispiel.com",
  },
];

export function getAllProfiles() {
  return profiles;
}

export function getProfileById(id) {
  return profiles.find((profile) => profile.id === id);
}

export function updateProfile(id, updatedProfile) {
  const index = profiles.findIndex((profile) => profile.id === id);
  if (index !== -1) {
    profiles[index] = { ...profiles[index], ...updatedProfile };
    return true;
  }
  return false;
}

export function deleteProfile(id) {
  profiles = profiles.filter((profile) => profile.id !== id);
  return true;
}
