import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin1234");
  const {login , isLoadingLogin} = useLogin()
  function handleSubmit(e) {
    e.preventDefault();

    if(!email || !password) return;
    login({ email, password });


  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button variation="primary" size="large" disabled={isLoadingLogin}>
          {!isLoadingLogin ? 'Log in' : <SpinnerMini/>}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
