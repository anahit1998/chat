import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Jumbotron, Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { signUp } from 'components/Register/registerAction';
import { Redirect } from 'react-router-dom';
import 'components/Register/register.less';

const Register = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verification, setVerification] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username,
      email,
      password,
      verification,
    }
    if (!user.username || !user.email || !user.password || !user.verification) {
      return
    }
    if (user.password !== user.verification) {
      return
    }

    dispatch(
      signUp(user, () => {
        setRedirect(!redirect);
      }),
    );
  }


  return (
    <div className="register-page-container page" >
      {redirect ? <Redirect to='/login' /> : null}
      <Jumbotron>
        <Form method="post" onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className="prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faUser} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl className="input-control"
              placeholder="username"
              required
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className="prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="email"
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className="prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="password"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className="prepend">
              <InputGroup.Text>
                <FontAwesomeIcon icon={faLock} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="repeat password"
              type="password"
              name="verification"
              required
              onChange={(e) => setVerification(e.target.value)}
            />
          </InputGroup>
          <Row>
            <Col>
              <Button size="lg" variant="success" type="submit">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Jumbotron>
    </div>
  );
};

export default Register;
