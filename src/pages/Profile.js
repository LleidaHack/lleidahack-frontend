import React from "react";
import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer";
import Profile_component from "src/components/Profile/profile";

const Profile = () => {
  return (
    <>
      <Header />
      <Profile_component/>
      <Footer />
    </>
  );
};

export default Profile;
