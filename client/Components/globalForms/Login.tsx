import '../../styles/login.css';
import { useState } from 'react';
import { API_URL } from '../../config';
import { postFormToServer } from '../../utils/fetchPostForms';

interface StateProps {
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LoginInfo {
  email: string;
  password: string;
}
const Login = (props: StateProps) => {
  const { setShowLoginForm } = props;
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const result = await postFormToServer(API_URL.USER_LOGIN, loginInfo);
    localStorage.setItem('user', JSON.stringify(result.data));
    localStorage.setItem('token', result.token);
    console.log('resultFromLogin', result);
    setShowLoginForm(false);
  };

  const handleClick = (): void => {
    setShowLoginForm(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, type } = e.currentTarget;
    setLoginInfo({ ...loginInfo, [`${type}`]: value });
    console.log('register Info', loginInfo);
  };

  return (
    <div className="form-background" onClick={handleClick}>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        onClick={(e: React.MouseEvent<HTMLFormElement>) => {
          e.stopPropagation();
        }}
      >
        <h1>Login</h1>
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button className="button-submit-login pulse" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
