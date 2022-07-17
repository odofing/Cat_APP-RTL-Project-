import { useState } from 'react'
import validator from 'validator'

const Form = () => {
  const [error, setError] = useState('')
  const [signUpInput, setSignUpInput] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (!validator.isEmail(signUpInput.email)) {
      return setError('the email you input is invalid')
    } else if (signUpInput.password.length < 5) {
      return setError(
        'the password you entered should contain 5 or more characters'
      )
    } else if (signUpInput.password !== signUpInput.confirmPassword) {
      return setError('the password do not match, try again')
    }
  }

  return (
    <>
      <h1>React-Testing Library course</h1>
      <div className='container my-5'>
        {error && <p className='text-danger'>{error}</p>}
        <form>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              email
            </label>
            <input
              type='email'
              id='email'
              className='form-control'
              name='email'
              value={signUpInput.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='form-control'
              name='password'
              value={signUpInput.password}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='confirm-password' className='form-label'>
              confirm Password
            </label>
            <input
              type='password'
              id='confirm-password'
              className='form-control'
              name='confirmPassword'
              value={signUpInput.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleClick}
          >
            submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
