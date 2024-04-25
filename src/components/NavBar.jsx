import viteLogo from "/vite.svg";

function NavBar({ firstName, age }) {
  return (
    <div className="globalNav">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logoNav" alt="Vite logo" />
      </a>
      <ul className="navUl">
        <li className="navLi">
          <a href="#">HOME</a>
        </li>
        <li className="navLi">
          <a href="#">CONTACT</a>
        </li>
      </ul>
      {firstName}
      <p>{age}</p>
    </div>
  );
}
export default NavBar;
