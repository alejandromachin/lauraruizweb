import styled from "styled-components";

const ContactMenuList = styled.ul`
  z-index: 1000;
  .contactMenu__link {
    font-weight: 400;
    text-decoration: underline;
  }

  .contactMenu__link:hover {
    text-decoration: none;
    color: #9d75b4;
  }
`;

export default ContactMenuList;
