import styled from "styled-components";
import "./variables.css";

const Button = styled.button`
  background-color: var(--white);
  color: ${props => props.primary ? "var(--black)" : props.primary };
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? props.primary : "var(--palevioletred)"};
  border-radius: 3px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: var(--darkgrey);
`;

const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: var(--darkgrey);
`;

const Counter = styled.span`
  font-size: 1em;
  color: var(--orange);
  filter: brightness(0.8);
`;

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 0;
`;

const ListLi = styled.li`
    min-width: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid var(--grey);
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    background-color: var(--lightgrey);

    @media only screen and (max-width: 500px) {
        width: 90%;
    }
`;

const Hobbie = styled.span`
    padding: 4px 10px;
    margin: 5px;
    background-color: var(--lightgrey);
    filter: brightness(0.8);
    border-radius: 4px;
`;

const UserName = styled.div`
    padding: 10px;
    margin: 0 10px;
    background-color: var(--green);
    border-radius: 4px;
`;


export {Button, Title, Text, Counter, List, ListLi, Hobbie, UserName}