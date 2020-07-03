import React, { useState, useReducer, useEffect } from "react";
import "./styles.css";
import "./variables.css";
import { data } from "./data/users.js";
import { Users, editArray } from "./components/Users";
import { filterUsersWithUniqueHobbies, UsersWithUniqueHobbies } from "./components/UsersWithUniqueHobbies";
import { reducer } from "./components/Reducer";
import {
  Button,
  Title,
  Text,
  Counter
} from "./styled-components";

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [usersArray, setUsersArray] = useState([]);
  const [usersWithUniqueHobbies, setUsersWithUniqueHobbies] = useState([]);

  useEffect(() => {
    setUsersArray(editArray(data));
    setUsersWithUniqueHobbies(filterUsersWithUniqueHobbies(data));
  }, []);

  return (
    <div className="App">
      <Title>Test challenge PWC</Title>
      <Text>
        Count <Counter>{state.count}</Counter>{" "}
      </Text>
      <Button primary="var(--green)" onClick={() => dispatch({ type: "increment" })}>
        Increment{" "}
      </Button>
      <Button primary="var(--purple)" onClick={() => dispatch({ type: "decrement" })}>
        Decrement{" "}
      </Button>
      <Button
        primary="var(--yellow)"
        onClick={() => dispatch({ type: "incrementToUnequal" })}
      >
        incrementToUnequal{" "}
      </Button>
      <Button
        primary="var(--orange)"
        onClick={() => dispatch({ type: "decrementToPrime" })}
      >
        decrementToPrime{" "}
      </Button>
      <Button onClick={() => dispatch({ type: "incrementToFibonacci" })}>
        incrementToFibonacci{" "}
      </Button>
      <Users users={usersArray} />
      <UsersWithUniqueHobbies users={usersWithUniqueHobbies} />
    </div>
  );
}
