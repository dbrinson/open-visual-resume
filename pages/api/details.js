import Profile from '../info/profile.json'

export default function handler(req, res) {
    res.status(200).json(Profile)
  }
  