
import React from "react";
import {
  List,
  UserName
  } from "../styled-components";

  export const filterUsersWithUniqueHobbies = (array) => {
    let hobbiesObject = {};
    let result = [];
  
    array.forEach((user) => {
      if (!user.hobbies) return;
      let include = true;
      user.hobbies.forEach((hobbie) => {
        const hobbieLowerCase = hobbie.toLowerCase();
        if (hobbiesObject[hobbieLowerCase]) {
          const index = result.findIndex(x => x.name === hobbiesObject[hobbieLowerCase]);
          result.splice(index, 1);
          hobbiesObject[hobbieLowerCase] = null;
          include = false;
        } else if (hobbiesObject[hobbieLowerCase] === null) {
          include = false;
        } else {
          hobbiesObject[hobbieLowerCase] = user.name;
        }
      });
      if (include) {
        result.push(user);
      }
    });
    
    return result;
  };
  
  export const UsersWithUniqueHobbies = (props) => {
    return (
      <fieldset>
        <legend>Users with unique hobbies</legend>
      <List>
        {props.users.length > 0 &&
          props.users.map((user, index) => (
            <UserName key={index}>
              {user.name}
            </UserName>
          ))}
      </List>
      </fieldset>
    );
  };