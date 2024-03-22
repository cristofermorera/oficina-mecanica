import styled from "styled-components";

export const Body = styled.div`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Topnav = styled.div`
  overflow: hidden;
  background-color: #333;
  border-radius: 10px;
`;

export const TopnavLink = styled.div`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &.active {
    background-color: #04aa6d;
    color: white;
  }

  &.logout{
    float: right;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font: inherit;
  }

  a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    text-decoration: none;
    font-size: 17px;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }
`;
