import '../../styles/register.css';
import { useState } from 'react';
import { API_URL } from '../../config';
import { postFormToServer } from '../../utils/fetchPostForms';
interface StateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}

interface RegisterInfo {
  email: string;
  password: string;
}

const Register = (props: StateProps) => {
  const { setShowRegisterForm } = props;
  const [registerInfo, setRegisterInfo] = useState<RegisterInfo>({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const result = await postFormToServer(API_URL.USER_REGISTER, registerInfo);
    localStorage.setItem('user', JSON.stringify(result.data));
    localStorage.setItem('token', result.token);
    console.log('resultFromRegister', result);
    setShowRegisterForm(false);
  };

  const handleClick = (): void => {
    setShowRegisterForm(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value, type } = e.currentTarget;
    setRegisterInfo({ ...registerInfo, [`${type}`]: value });
    console.log('register Info', registerInfo);
  };

  return (
    <div className="form-background" onClick={handleClick}>
      <form
        className="register-form"
        onClick={(e: React.MouseEvent<HTMLFormElement>) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
      >
        <h1>Register</h1>
        <p>Register now to make your first purchase of tea!</p>
        <input type="email" placeholder="Email" onChange={handleChange} />
        <input type="password" placeholder="Password" onChange={handleChange} />
        <button className="button-submit-register pulse" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
