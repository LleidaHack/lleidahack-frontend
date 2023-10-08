import React from "react";
import Header from "src/components/Header/Header.js";
import Footer from "src/components/Footer/Footer";
import ProfileComponent from "src/components/Profile/profile";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileComponent />
      <Footer />
    </>
  );
};

export default Profile;
