import React from 'react'
import '../styles/login.css'
import { Button, Header, Input } from '../components'
import { useHistory } from 'react-router-dom'

const Login = () => {
    document.title = 'Login'

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [savedUser, setSavedUser] = React.useState({})

    const history = useHistory()

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            console.log(user)
            setSavedUser(user)
        }
    }, [])

    const onSubmit = (e) => {
        e.preventDefault()
        if (savedUser?.email === email && savedUser?.password === password) {
            console.log('Login Success')
            history.replace('/dashboard')
        } else {
            alert('email atau password salah')
        }
    }

    return (
        <div>
            {/* <Header isNav/> */}
            <div className='login'>
                <form onSubmit={onSubmit}>
                <h1>Login</h1>
                    <Input
                        label='email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label='password'
                        type={show ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button title='Login' onClick={onSubmit} type='submit' />
                </form>
            </div>
        </div>
    )
}

export default Login
