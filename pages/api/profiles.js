import { getAllProfiles } from "../../data";

export default function handler(req, res) {
  if (req.method === "GET") {
    const profiles = getAllProfiles();
    return res.status(200).json(profiles);
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
