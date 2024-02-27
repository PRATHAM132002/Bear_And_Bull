import React, { useState } from 'react';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Form submitted:', { email, password, isLogin });
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <section className="vh-100" style={{ backgroundColor: 'white' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h3 className="mb-5">{isLogin ? 'Sign in' : 'Sign up'}</h3>

                <div className="form-group mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className="form-group mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>

                {!isLogin && (
                  <div className="form-group mb-4">
                    {/* Add additional fields for signup, e.g., confirm password */}
                    <input
                      type="password"
                      id="confirmPasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Confirm Password"
                      // Add value and onChange as needed
                    />
                  </div>
                )}

                <div className="form-check d-flex justify-content-start mb-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label className="form-check-label" htmlFor="form1Example3">
                    {' '}
                    &nbsp;&nbsp;&nbsp;Remember password{' '}
                  </label>
                </div>

                <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>
                  {isLogin ? 'Login' : 'Sign up'}
                </button>

                <hr className="my-4" />

                <button
                  className="btn btn-lg btn-block btn-primary"
                  style={{ backgroundColor: '#dd4b39' }}
                  type="submit"
                >
                  <i className="fab fa-google me-2"></i> {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
                </button>
                <br />
                <br />
              
                <button
                  className="btn btn-lg btn-block btn-primary mb-2"
                  style={{ backgroundColor: '#3b5998' }}
                  type="submit"
                >
                  <i className="fab fa-facebook-f me-2"></i> {isLogin ? 'Sign in with Facebook' : 'Sign up with Facebook'}
                </button>

                <p className="mt-3">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                  <button className="btn btn-link p-0" onClick={toggleForm}>
                    {isLogin ? 'Sign up' : 'Login'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
