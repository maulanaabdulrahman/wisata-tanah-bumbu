import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";

const LoginBox = styled.div`
  max-width: 1200px;
  width: 100%;
  min-height: 500px;
  border-radius: 25px;
  stroke: #bcbcbc;
  background-color: #fff;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
  }

  @media (min-width: 901px) {
    padding-left: 75px;
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 900px) {
    margin-bottom: 20px;
    justify-content: center;
    width: 100%;
  }
`;

function Login() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/background.png')] bg-cover bg-bottom p-4">
      <LoginBox className="shadow mx-auto">
        <LogoContainer>
          <Logo size={windowWidth <= 600 ? "medium" : "large"} />
        </LogoContainer>
        <LoginForm />
      </LoginBox>
    </div>
  );
}

export default Login;
