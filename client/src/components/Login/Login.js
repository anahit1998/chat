import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Jumbotron, Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { signIn } from 'components/Login/loginAction';
import 'components/Login/login.less';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username,
      password
    }
    if (!user.username || !user.password ) {
      return
    }

    dispatch(
      signIn(user, () => {
        setRedirect(!redirect);
      }),
    );
  }

return (
  <div className="register-page-container page" >
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
            name="name"
            onChange={(e) => setUsername(e.target.value)}
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
        <Row>
          <Col>
            <Button size="lg" variant="success" type="submit">
              Log in
              </Button>
          </Col>
        </Row>
      </Form>
    </Jumbotron>
  </div>
);
};

export default Login;
