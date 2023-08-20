import React from "react";
import { useState } from "react";

import MetaTest from 'src/components/others/MetaTest';
import {signupUser,getAllUsers,getUserById,updateUser,deleteUser,addUser} from "src/services/UserService";
import {signupHacker,getAllHackers,getHackerById,updateHacker,deleteHacker,addHacker,banHackerById,unbanHackerById} from "src/services/HackerService";
import {getAllHackerGroups,getHackerGroupById,updateHackerGroup,deleteHackerGroup,addHackerGroup,getHackerGroupMembers,addHackerToGroup,removeHackerFromGroup} from "src/services/HackerGroupService";
import {signupLleidaHacker,getAllLleidaHackers,getLleidaHackerById,updateLleidaHacker,deleteLleidaHacker,addLleidaHacker} from "src/services/LleidaHackerService";
import {getAllLleidaHackerGroups,getLleidaHackerGroupById,deleteLleidaHackerGroup,addLleidaHackerGroup,getLleidaHackerGroupMembers,addLleidaHackerToGroup,removeLleidaHackerFromGroup,setLleidaHackerGroupLeader} from "src/services/LleidaHackerGroupService";
import {getAllCompanies,getCompanyById,updateCompany,deleteCompany,addCompany,getCompanyUsers,addUserToCompany,removeUserFromCompany} from "src/services/CompanyService";
import {getEvents,createEvent,getEventById,updateEvent,deleteEvent,getEventParticipants,getEventSponsors,getEventGroups,addEventParticipant,deleteEventParticipant,addEventSponsor,deleteEventSponsor,addEventGroup,deleteEventGroup} from "src/services/EventService";
import {confirmEmail,login} from "src/services/AuthenticationService";
import {uploadImage,sendMail,getImage} from "src/services/UtilsService";
import {registerHackerToEvent,unregisterHackerToEvent,getEventStatus,hackerEatsFoodFrom} from "src/services/EventManagementService";
import {signupCompanyUser,getAllCompanyUsers,getCompanyUserById,updateCompanyUser,deleteCompanyUser,addCompanyUser} from "src/services/CompanyUserService";

const Testing = () => {
  const [user, setUser] = useState({
    name: "joel",
    nickname: "elver",
    password: "12345678a",
    birthdate: "06/20/03",
    food_restrictions: "NO",
    email: "joelros2008@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image_id: "0",
  });

  const [hacker, setHacker] = useState({
    name: "joel",
    nickname: "elver",
    password: "12345678a",
    birthdate: "06/20/03",
    food_restrictions: "NO",
    email: "joelros2000@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image_id: "0",
    banned: true,
    github: "string",
    linkedin: "string",
  });

  const [grup, setGrup] = useState({
    name: "string",
    description: "string",
    id: 2,
    members: [
      {
        name: "string",
        nickname: "string",
        password: "string",
        birthdate: "string",
        food_restrictions: "string",
        email: "string",
        telephone: "string",
        address: "string",
        shirt_size: "string",
        image_id: "string",
        banned: true,
        role: "string",
        nif: "48255629L",
        student: true,
        active: true,
        github: "string",
        linkedin: "string",
      },
    ],
    leader: 0,
  });

  const [lleidahacker, setLleidahacker] = useState({
    name: "joel",
    id: 6,
    nickname: "elver",
    password: "12345678a",
    birthdate: "06/20/03",
    food_restrictions: "NO",
    email: "joelros2001@gmail.com",
    telephone: "693931391",
    address: "casa",
    shirt_size: "L",
    image_id: "0",
    role: "string",
    nif: "48255629L",
    student: true,
    active: true,
    github: "a",
  });

  const [event, setEvent] = useState({
    name: "string",
    id: 1,
    description: "string",
    start_date: "2023-08-08",
    end_date: "2023-08-08",
    location: "string",
    archived: true,
    price: 0,
    max_participants: 0,
    max_sponsors: 0,
  });

  const [company, setCompany] = useState({
    name: "string",
    description: "string",
    website: "string",
    logo: "string",
    address: "string",
    telephone: "string",
    companyId: 1,
    users: [
      {
        name: "string",
        nickname: "string",
        password: "string",
        birthdate: "2023-08-08",
        food_restrictions: "string",
        email: "joelros2003@gmail.com",
        telephone: "string",
        address: "string",
        shirt_size: "string",
        image_id: "string",
        banned: true,
        role: "string",
        nif: "48255629L",
        student: true,
        active: true,
        github: "string",
        linkedin: "string",
        company_id: 1,
      },
    ],
  });

  const [companyUser, setCompanyUser] = useState({
    name: "string",
    nickname: "string",
    password: "string",
    birthdate: "2023-08-08",
    food_restrictions: "string",
    email: "joelros2003@gmail.com",
    telephone: "string",
    address: "string",
    shirt_size: "string",
    image_id: "string",
    role: "string",
    company_id: 1,
    id: 1,
  });

  //NOMÉS FUNCIONEN GETS
  const Fuctions = [
    {
      name: "user",
      left: 0,
      comentaris:
        "cors limitat, sense canviar el bearer salta en tots menys al getUserById",
      body: [
        {
          body: signupUser,
          params: [user],
          status: false,
        },
        {
          body: getAllUsers,
          params: [],
          status: true,
        },
        {
          body: getUserById,
          params: [user.id],
          status: true,
        },
        {
          body: updateUser,
          params: [user],
          status: false,
        },
        {
          body: deleteUser,
          params: [user.id],
          status: false,
        },
        {
          body: addUser,
          params: [user],
          status: false,
        },
      ],
    },
    {
      name: "hacker",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: signupHacker,
          params: [hacker],
          status: false,
        },
        {
          body: getAllHackers,
          params: [],
          status: true,
        },
        {
          body: getHackerById,
          params: [74],
          status: true,
        },
        {
          body: updateHacker,
          params: [hacker],
          status: false,
        },
        {
          body: addHacker,
          params: [hacker],
          status: false,
        },
        {
          body: banHackerById,
          params: [74],
          status: false,
        },
        {
          body: unbanHackerById,
          params: [74],
          status: false,
        },
        {
          body: deleteHacker,
          params: [hacker.id],
          status: false,
        },
      ],
    },
    {
      name: "hackerGroup",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: getAllHackerGroups,
          params: [],
          status: true,
        },
        {
          body: getHackerGroupById,
          params: [grup.id],
          status: true,
        },
        {
          body: updateHackerGroup,
          params: [grup],
          status: false,
        },
        {
          body: deleteHackerGroup,
          params: [grup.id],
          status: false,
        },
        {
          body: addHackerGroup,
          params: [grup],
          status: false,
        },
        {
          body: getHackerGroupMembers,
          params: [grup.id],
          status: true,
        },
        {
          body: addHackerToGroup,
          params: [user.id, grup.id],
          status: false,
        },
        {
          body: removeHackerFromGroup,
          params: [user.id, grup.id],
          status: false,
        },
      ],
    },
    {
      name: "lleidaHacker",
      left: 0,
      comentaris:
        "funcionen sense bearer, get lleidahacker by id no va peruqe no hi ha lleidahackers",
      body: [
        {
          body: signupLleidaHacker,
          params: [lleidahacker],
          status: false,
        },
        {
          body: getAllLleidaHackers,
          params: [],
          status: false,
        },
        {
          body: getLleidaHackerById,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: updateLleidaHacker,
          params: [lleidahacker],
          status: false,
        },
        {
          body: deleteLleidaHacker,
          params: [lleidahacker.id],
          status: false,
        },
        {
          body: addLleidaHacker,
          params: [lleidahacker],
          status: false,
        },
      ],
    },
    {
      name: "lleidahacker group",
      left: 0,
      comentaris: "funcionen sense bearer",
      body: [
        {
          body: getAllLleidaHackerGroups,
          params: [],
          status: false,
        },
        {
          body: getLleidaHackerGroupById,
          params: [grup.id],
          status: false,
        },
        {
          body: deleteLleidaHackerGroup, //ids existents: []           colapsa si no n'hi han
          params: [7],
          status: true,
        },
        {
          body: addLleidaHackerGroup,
          params: [grup],
          status: true,
        },
        {
          body: getLleidaHackerGroupMembers,
          params: [4],
          status: true,
        },
        {
          body: addLleidaHackerToGroup,
          params: [lleidahacker.id, 6],
          status: false,
        },
        {
          body: removeLleidaHackerFromGroup,
          params: [lleidahacker.id, grup.id],
          status: false,
        },
        {
          body: setLleidaHackerGroupLeader,
          params: [lleidahacker.id, grup.id],
          status: false,
        },
      ],
    },
    {
      name: "company",
      left: 0,
      comentaris: "",
      body: [
        {
          body: getAllCompanies,
          params: [],
          status: true,
        },
        {
          body: getCompanyById,
          params: [1],
          status: false,
        },
        {
          body: updateCompany,
          params: [companyUser],
          status: false,
        },
        {
          body: deleteCompany,
          params: [companyUser.id],
          status: false,
        },
        {
          body: addCompany,
          params: [company],
          status: false,
        },
        {
          body: getCompanyUsers,
          params: [company.id],
          status: false,
        },
        {
          body: addUserToCompany,
          params: [companyUser, company.id],
          status: false,
        },
        {
          body: removeUserFromCompany,
          params: [companyUser.id, company.id],
          status: false,
        },
      ],
    },
    {
      name: "event",
      left: 0,
      comentaris: "",
      body: [
        {
          body: getEvents,
          params: [],
          status: true,
        },
        {
          body: createEvent,
          params: [event],
          status: false,
        },
        {
          body: getEventById,
          params: [event.id],
          status: true,
        },
        {
          body: updateEvent,
          params: [event],
          status: false,
        },
        {
          body: deleteEvent,
          params: [event.id],
          status: false,
        },
        {
          body: getEventParticipants,
          params: [event.id],
          status: false,
        },
        {
          body: getEventSponsors,
          params: [event.id],
          status: false,
        },
        {
          body: getEventGroups,
          params: [event.id],
          status: false,
        },
        {
          body: addEventParticipant,
          params: [event.id, user.id],
          status: false,
        },
        {
          body: deleteEventParticipant,
          params: [event.id, user.id],
          status: false,
        },
        {
          body: addEventSponsor,
          params: [event.id, company.id],
          status: false,
        },
        {
          body: deleteEventSponsor,
          params: [event.id, company.id],
          status: false,
        },
        {
          body: addEventGroup,
          params: [event.id, grup.id],
          status: false,
        },
        {
          body: deleteEventGroup,
          params: [event.id, grup.id],
          status: false,
        },
      ],
    },
    {
      name: "auth",
      left: 0,
      body: [
        {
          body: login,
          params: [user],
          status: false,
        },
        {
          body: confirmEmail,
          params: ["a@a.a"],
          status: false,
        },
      ],
    },
    {
      name: "utils",
      left: 0,
      body: [
        {
          body: uploadImage,
          params: [],
          status: false,
        },
        {
          body: sendMail,
          params: ["a@a.a"],
          status: false,
        },
        {
          body: getImage,
          params: ["1"],
          status: false,
        },
      ],
    },
    {
      name: "event management",
      left: 0,
      comentaris: "",
      body: [
        {
          body: registerHackerToEvent,
          params: [user.id, event.id],
          status: false,
        },
        {
          body: unregisterHackerToEvent,
          params: [user.id, event.id],
          status: false,
        },
        {
          body: getEventStatus,
          params: [event.id],
          status: false,
        },
        {
          body: hackerEatsFoodFrom,
          params: [user.id, 1, event.id],
          status: false,
        },
      ],
    },
    {
      name: "company user",
      left: 0,
      comentaris: "",
      body: [
        {
          body: signupCompanyUser,
          params: [companyUser],
          status: false,
        },
        {
          body: getAllCompanyUsers,
          params: [],
          status: false,
        },
        {
          body: getCompanyUserById,
          params: [companyUser.id],
          status: false,
        },
        {
          body: updateCompanyUser,
          params: [companyUser],
          status: false,
        },
        {
          body: deleteCompanyUser,
          params: [companyUser.id],
          status: false,
        },
        {
          body: addCompanyUser,
          params: [companyUser],
          status: false,
        },
      ],
    },
  ];

  const redoUser = () => {
    setUser((prevObj) => ({
      ...prevObj,
      nickname: `${Math.random()}`,
      password: `${Math.random()}`,
      email: `provausuari@${Math.random()}`,
      id: 0,
    }));
  };
  const changeID = () => {
    setUser((prevObj) => ({
      ...prevObj,
      id: parseInt(prompt("id:")),
    }));
  };
  return (
    <div>
      <h1>User rn</h1>
      <p>
        id: {user.id}
        <br />
        nick: {user.nickname}
        <br />
        pass: {user.password}
        <br />
        email: {user.email}
      </p>
      <button onClick={() => redoUser()}>redoUser</button>
      <button onClick={() => changeID()}>changeId</button>
      <MetaTest functionsList={Fuctions} />
    </div>
  );
};

export default Testing;
