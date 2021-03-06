import ContactMenuList from "../../styles/contactMenuStyles";

const ContactMenu = () => {
  return (
    <ContactMenuList>
      <li className="contactMenu__link">
        <a href="mailto: lruizpenacho@gmail.com">Email</a>
      </li>
      <li className="contactMenu__link">
        <a
          href="https://www.instagram.com/lauraruizpenacho/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </li>
      <li>Based in Barcelona</li>
    </ContactMenuList>
  );
};
export default ContactMenu;
