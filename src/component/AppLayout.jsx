import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = styled.ul`
  max-width: 1000px;
  display: flex;
  justify-content: end;
  padding: 20px;
  height: 70px;
  margin: 0 auto;
  & > li {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #eeeeee;
  }
  & > li:active {
    box-shadow: inset 1px 1px 2px #babebc, inset -1px -1px 2px #fff;
  }
  & > li > div {
    position: relative;
  }
  & > li > div > p {
    position: absolute;
    bottom: -55px;
    left: calc(50% - 60px);
    width: 120px;
    height: 30px;
    line-height: 30px;
    border-radius: 2px;
    padding: 0 2px;
    background-color: #ccc;
    font-size: 10px;
    text-align: center;
    opacity: 0;
  }
  & > li:nth-of-type(4) > div > p {
    left: calc(50% - 45px);
    width: 90px;
  }
  & > li > div > p::after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ccc;
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
  }
  & > li:nth-of-type(4) > div > p::after {
    left: 35px;
  }
  & > li:hover > div > p {
    opacity: 1;
  }
`;
const AppLayout = () => {
  const navigate = useNavigate();

  const copyCode = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied");
    });
  };

  return (
    <div>
      <Header>
        <li
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faHouse} size="1x" />
        </li>
        <li>
          <div>
            <a
              href="https://github.com/simi-22"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="mailto: ssimii0222@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </a>
            <p onClick={() => copyCode("ssimii0222@gmail.com")}>
              ssimii0222@gmail.com
            </p>
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon icon={faMobile} size="1x" />
            <p onClick={() => copyCode("010-7274-8977")}>010-7274-8977</p>
          </div>
        </li>
      </Header>
      <Outlet />
    </div>
  );
};

export default AppLayout;
