import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Grid2,
  Divider,
} from "@mui/material";

const MyNetwork = ({ user = {} }) => {
  return (
    <div
      className="container p-3"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <Grid2 container spacing={3} mt={5}>
        {/* Left Sidebar */}
        <Grid2 item xs={12} md={3} lg={3} className="sidebar">
          <Card className="shadow-sm p-3">
            {/* User Profile Section */}
            <CardContent className="text-center mb-4">
              <div
                className="rounded-top bg-primary mb-3"
                style={{ height: "50px", width: "100%" }}
              ></div>
              <Avatar
                src={user.profilePicture || "/avatar.png"}
                alt={user.name || "User"}
                sx={{
                  width: 70,
                  height: 70,
                  border: "3px solid white",
                  marginTop: "-35px",
                }}
                className="profile-avatar"
              />
              <Typography variant="h6" className="fw-bold mt-2">
                {user.name || "Guest User"}
              </Typography>
              <Typography variant="body2" className="text-muted">
                {user.headline || "Welcome to LinkedIn"}
              </Typography>
            </CardContent>

            {/* Manage My Network Section */}
            <Divider sx={{ marginBottom: 2 }} />
            <CardContent>
              <Typography variant="h6" className="fw-bold mb-3">
                Manage My Network
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                className="mb-2 sidebar-button"
              >
                Followers
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                className="mb-2 sidebar-button"
              >
                Following
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="success"
                className="mb-2 sidebar-button"
              >
                Events
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="warning"
                className="mb-2 sidebar-button"
              >
                Groups
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="info"
                className="sidebar-button"
              >
                Pages
              </Button>
            </CardContent>

            {/* Divider */}
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

            {/* Visit Profile Link */}
            <CardContent className="text-center">
              <Button
                variant="contained"
                fullWidth
                color="primary"
                sx={{ textTransform: "none" }}
                className="visit-profile-button"
              >
                Visit your profile
              </Button>
            </CardContent>
          </Card>
        </Grid2>

        {/* Main Content */}
        <Grid2 item xs={12} md={8} lg={6} className="main-content">
          {/* Invitations */}
          <Card
            className="shadow-sm mb-3 p-4 card-invitation"
            sx={{ minHeight: "300px" }}
          >
            <Typography variant="h6" className="fw-bold mb-2">
              Invitations
            </Typography>
            <Typography variant="body2" className="text-muted mb-2">
              You have no new invitations.
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
          </Card>

          {/* Suggested Connections */}
          <Card
            className="shadow-sm mb-3 p-4 card-suggestions"
            sx={{ minHeight: "350px" }}
          >
            <Typography variant="h6" className="fw-bold mb-3">
              People You May Know
            </Typography>
            {[1, 2, 3].map((id) => (
              <Grid2
                container
                spacing={2}
                key={id}
                alignItems="center"
                className="mb-3 suggestion-item"
              >
                <Grid2 item>
                  <Avatar src="/avatar.png" sx={{ width: 56, height: 56 }} />
                </Grid2>
                <Grid2 item xs>
                  <Typography variant="body1" className="fw-bold">
                    User {id}
                  </Typography>
                  <Typography variant="body2" className="text-muted">
                    Job Title
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    className="mt-2 connect-button"
                  >
                    Connect
                  </Button>
                </Grid2>
              </Grid2>
            ))}
          </Card>

          {/* Groups & Pages */}
          <Card
            className="shadow-sm p-4 card-groups-pages"
            sx={{ minHeight: "250px" }}
          >
            <Typography variant="h6" className="fw-bold mb-3">
              Groups, Pages & Newsletters
            </Typography>
            <Button variant="outlined" fullWidth className="mb-2">
              Discover More Groups
            </Button>
            <Button variant="outlined" fullWidth>
              Manage Your Pages
            </Button>
          </Card>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default MyNetwork;
