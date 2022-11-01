import styled from "styled-components"

const Button = styled.button`
  padding: 0.7rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.backgroundColor || "lightblue"};
  color: ${(props) => props.textColor || "#fff"};
  transition: all 0.2s ease-in-out;
  &:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
  }
`

export default Button
