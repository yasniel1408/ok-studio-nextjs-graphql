/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation } from '@apollo/client';
import { gql } from 'apollo-boost';
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';
import Auth from '../../layouts/Auth';
import { AuthCardHeader } from './components/AuthCardHeader';

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

const Login = () => {
  const [login, { data, loading, error }] = useMutation(LOGIN);

  return (
    <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
        <AuthCardHeader />
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or sign in with credentials</small>
          </div>
          <Form role="form">
            <FormGroup className="mb-3">
              <InputGroup className="input-group-alternative">
                <InputGroup addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-email-83" />
                  </InputGroupText>
                </InputGroup>
                <Input placeholder="Email" type="email" autoComplete="new-email" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative">
                <InputGroup addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-lock-circle-open" />
                  </InputGroupText>
                </InputGroup>
                <Input placeholder="Password" type="password" autoComplete="new-password" />
              </InputGroup>
            </FormGroup>
            <div className="custom-control custom-control-alternative custom-checkbox">
              <input className="custom-control-input" id="customCheckLogin" type="checkbox" />
              <label className="custom-control-label" htmlFor="customCheckLogin">
                <span className="text-muted">Remember me</span>
              </label>
            </div>
            <div className="text-center">
              <Button className="my-4" color="primary" type="button">
                Sign in
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
      <Row className="mt-3">
        <Col xs="6">
          <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
            <small>Forgot password?</small>
          </a>
        </Col>
        <Col className="text-right" xs="6">
          <a className="text-light" href="#pablo" onClick={(e) => e.preventDefault()}>
            <small>Create new account</small>
          </a>
        </Col>
      </Row>
    </Col>
  );
};

Login.layout = Auth;

export default Login;
