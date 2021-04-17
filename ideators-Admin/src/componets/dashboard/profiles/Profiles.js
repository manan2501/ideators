import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ProfileCard from "./profileCard";
import { getProfiles } from "../../../redux/actions/profile";
import store from "../../../redux/store";
import Spinner from "../../layout/Spinner";
import { useDispatch, useSelector } from "react-redux";

const Profiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, []);
  const profiles = useSelector((state) => state.profile.profiles);
  console.log(profiles);
  return profiles === null ? (
    <Spinner />
  ) : (
    <div>
      <Container>
        <Grid container spacing={2} justify="center">
          {profiles.map((profile) => (
            <ProfileCard
              name={profile.user.name}
              email={profile.user.email}
              credit={profile.credits}
              banned={profile.isBanned}
              userID={profile.user._id}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Profiles;
