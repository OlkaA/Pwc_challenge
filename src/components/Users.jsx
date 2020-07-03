
import React from "react";
import {
    List,
    ListLi,
    Hobbie,
  } from "../styled-components";

const convertToPascalCase = (string) => {
    return string
      .toLowerCase()
      .replace(
        /\w\S*/g,
        (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
      );
  };
  
  export const editArray = (array) => {
    const result = array.map((person) => {
      if (person.hobbies) {
        person.hobbies = person.hobbies.map((hobby) => {
          return convertToPascalCase(hobby);
        });
      }
      return person;
    });
    return result;
  };
  
  export const Users = (props) => {
    return (
      <fieldset>
        <legend>Users</legend>
        <List>
          {props.users.length > 0 &&
            props.users.map((user, index) => (
              <ListLi key={index}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                {user.hobbies && (
                  <>
                    Hobbies:{" "}
                    {user.hobbies.map((hobby, index) => (
                      <Hobbie key={index + hobby} className="hobby">
                        {hobby}
                      </Hobbie>
                    ))}
                  </>
                )}
                {user.work && <div>Work: {user.work}</div>}
              </ListLi>
            ))}
        </List>
      </fieldset>
    );
  };