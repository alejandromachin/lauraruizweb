import styled from "styled-components";

const ContactMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  gap: 5px;
  font-weight: 400;

  font-size: 13px;
  .contactMenu__link {
    font-weight: 200;
    text-decoration: underline;
  }

  .contactMenu__link:hover {
    text-decoration: none;
    color: #9d75b4;
  }
`;

export default ContactMenuList;
