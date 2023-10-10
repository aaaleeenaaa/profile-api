import { getProfileById, updateProfile, deleteProfile } from "../../../data.js";

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    const profileId = parseInt(id);
    if (isNaN(profileId)) {
      return res.status(400).json({ error: "Invalid ID" });
    }

    const profile = getProfileById(profileId);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }

    return res.status(200).json(profile);
  } else if (req.method === "PUT") {
    const { fullName, address, email } = req.body;
    const updatedProfile = { fullName, address, email };
    const result = updateProfile(parseInt(id), updatedProfile);
    if (!result) {
      return res.status(404).json({ error: "Profile not found" });
    }
    return res.status(200).json({ message: "Profile updated successfully" });
  } else if (req.method === "DELETE") {
    const result = deleteProfile(parseInt(id));
    if (!result) {
      return res.status(404).json({ error: "Profile not found" });
    }
    return res.status(200).json({ message: "Profile deleted successfully" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
