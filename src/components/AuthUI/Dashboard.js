import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, Alert, Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("../login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card sx={{ mx: 2, my: 2, px: 3, py: 3 }}>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Box sx={{ my: 2 }}>
          <strong>Logged User : </strong> {currentUser?.email}
        </Box>
        {/* <div>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </div> */}
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="contained" sx={{ ml: 2 }} onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
