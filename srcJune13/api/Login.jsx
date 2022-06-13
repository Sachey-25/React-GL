import React, {useRef, useState, useEffect }from 'react'

function Login() {
    const userRef = useRef()
    const errRef = useRef()
    // username, password and errmsg
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus() // username, password, message
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setUser('')
        setPwd('')
        setSuccess(true)
    }

  return (
      <div className='process'>
          { success ? (
              <section>
                  <h1> You are logged in </h1> <br />
                  <p> 
                      <a href="http://localhost:3000/"> Go to Home </a>
                  </p>
              </section>
          ) : (
  
      <section>
          <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"> {errMsg} </p>
          <h1> Sign In </h1>
          <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username: </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(event) => setUser (event.target.value)}
                value={user} 
                required 
                />

            <label htmlFor='password'>Password: </label>
              <input
                type="password"
                id="password"
                onChange={(event) => setPwd (event.target.value)}
                value={pwd} 
                required 
                />
            <button>Sign In</button>

          </form>
          <p> 
              Need an Acount ? <br/>
              <span className='line'>
                  <a href='#'>Sign Up </a>
              </span>
          </p>
      </section>
          )}
       </div>
  )}
export default Login