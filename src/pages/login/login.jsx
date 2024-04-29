import React, {useState} from 'react';
import './style.css'
import logo from '../../assets/logo.png'
import MaterialInput from "../../components/input/materialInput";
import ButtonMAterial from "../../components/button/buttonMAterial";
import axios from "axios";

const Login = () => {

    const [error, setError] = useState('')
    const [userInfo, setUserInfo] = useState({})
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    async function Auth () {
        try {
            const response = await axios.post('https://codify-teens.vercel.app/login' , user)
            setError('')
            setUserInfo(response.data.user)
        } catch (e) {
            if (e.response.status === 401) {
                setError('Не верный пароль логин')
                setUserInfo({})
            }
        }
    }
    // npm install -g
    return (
        <div className='Login-wrap'>

            <div className="login-block">

                <div className="logo-block">
                    <img src={logo} alt=""/>
                </div>

                <div className="inputs-block">

                    <MaterialInput
                        label='Login'
                        placeholder='Exapmle-Login_2024'
                        type='text'
                        onChange={(event) => setUser({...user, username: event.target.value})}
                    />

                    <MaterialInput
                        label='passoword'
                        type='password'
                        placeholder='exaple-password'
                        onChange={(event) => setUser({...user, password: event.target.value})}
                    />
                    <ButtonMAterial
                        value='Войти'
                        onClick={Auth}

                    />
                </div>


                <div className="result">
                    <div>
                        {error}
                    </div>

                    <div>
                        <p>{userInfo?.fullname}</p>
                        <p>{userInfo?.job}</p>
                        <p>{userInfo?.city}</p>
                    </div>

                </div>


            </div>


        </div>
    );
};


export default Login;