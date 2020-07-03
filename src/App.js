import React, { useState, useReducer, useEffect } from "react";
import "./styles.css";
import "./variables.css";
import {
  Button,
  Title,
  Text,
  Counter,
  List,
  ListLi,
  Hobbie,
  UserName
} from "./styled-components";

const data = [
  {
    name: "Jens",
    age: 24,
    hobbies: ["fishing", "sport", "television"],
  },
  {
    name: "Hans",
    age: 24,
    hobbies: ["MMA", "basketball", "Shopping"],
  },
  {
    name: "Erik",
    age: 24,
    hobbies: ["Muay Thai", "c#", "Netflix"],
  },
  {
    name: "Kim",
    age: 24,
    hobbies: ["fishing"],
  },
  {
    name: "Kasper",
    age: 24,
    work: "Engineer",
  },
  {
    name: "Nikolaj",
    age: 24,
    hobbies: ["programming", "react", "angular"],
  },
  {
    name: "Stine",
    age: 24,
    hobbies: ["running", "shopping"],
  },
  {
    name: "Hanne",
    age: 24,
    hobbies: ["boxing", "shopping"],
  },
];

/*

//1 create a function that corrects all hobbies
 into the same naming convention This can be any naming convention of your chose
 camelCase, snake_casing or PascalCasing
 This should be placed into a lifecycle hook, so the data is filtered,
 when the component mounts/loads


//2 create a function/component, that displays only persons, with unqieu hobbies


//3 extend on the functionality insisde the source code
  use the useReducer hook, to create the following functionalities.
  - increase the counter to the nearest unequal number
  - decreae  the counter to the nearest prime number
  - increase the counter using the fibonacci number sequence


//4 create some styling for the components/projects you have made so far
 you can use external libraries like styled-components, material-ui or similar
*/
const convertToPascalCase = (string) => {
  return string
    .toLowerCase()
    .replace(
      /\w\S*/g,
      (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
    );
};

const editArray = (array) => {
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

const Users = (props) => {
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

const filterUsersWithUniqueHobbies = (array) => {
  let hobbiesObject = {};
  let result = [];

  array.forEach((user) => {
    if (!user.hobbies) return;
    let include = true;
    user.hobbies.forEach((hobbie) => {
      const hobbieLowerCase = hobbie.toLowerCase();
      if (hobbiesObject[hobbieLowerCase]) {
        result.splice(result.indexOf(user), 1);
        hobbiesObject[hobbieLowerCase] = null;
        include = false;
      } else if (hobbiesObject[hobbieLowerCase] === null) {
        include = false;
        return;
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

const UsersWithUniqueHobbies = (props) => {
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

const unEqual = (number) => {
  return number % 2 === 0 ? number + 1 : number + 2;
};

const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};

const lowerPrimes = (number) => {
  if (number < 3) return 0;
  let lowerPrime;
  let counter = 1;
  while (!lowerPrime) {
    if (isPrime(number - counter)) {
      lowerPrime = number - counter;
    }
    counter++;
  }
  return lowerPrime;
};

const fibonacci = (number) => {
  const correctedNumber = number < 6 ? 6 : number;
  let array = [];

  for(let i = 0; i <= correctedNumber; i ++){
    if(i === 0){
      array.push(0);
    } else if(i === 1 || i === 2){
      array.push(1)
    } else {
      array.push(array[i - 2] + array[i - 1])
    }
  }

  const newNumber = array.find(item => {
    return number < item;
  })

  return newNumber;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementToUnequal":
      return { count: unEqual(state.count) };
    case "decrementToPrime":
      return { count: lowerPrimes(state.count) };
    case "incrementToFibonacci":
      return { count: fibonacci(state.count)};
    default:
      throw new Error("No valid selection was used");
  }
};

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
