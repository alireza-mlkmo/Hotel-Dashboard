import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({children}) {
  const navigate = useNavigate();

  //1. Load authenticated user
  const { user, isAuthenticated, isLoadingUser } = useUser();

  //2. If there is NO authenticated user , redirect to the login page
  useEffect(function () {
    if (!isAuthenticated && !isLoadingUser) navigate("/login");
  }, [isAuthenticated , isLoadingUser , navigate]);

  //3. While loading show spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. If there IS a user , render the app
  if(isAuthenticated) return  children ;
}