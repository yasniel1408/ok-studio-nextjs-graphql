/* eslint-disable global-require */
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
import { AuthCardHeader } from '../../components/AuthCardHeader/AuthCardHeader';

function Register() {
  return (
    <Col lg="6" md="8">
      <Card className="bg-secondary shadow border-0">
        <AuthCardHeader />
        <CardBody className="px-lg-5 py-lg-5">
          <div className="text-center text-muted mb-4">
            <small>Or sign up with credentials</small>
          </div>
          <Form role="form">
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
                <InputGroup addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-hat-3" />
                  </InputGroupText>
                </InputGroup>
                <Input placeholder="Name" type="text" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup className="input-group-alternative mb-3">
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
            <div className="text-muted font-italic">
              <small>
                password strength: <span className="text-success font-weight-700">strong</span>
              </small>
            </div>
            <Row className="my-4">
              <Col xs="12">
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id="customCheckRegister"
                    type="checkbox"
                  />
                  <label className="custom-control-label" htmlFor="customCheckRegister">
                    <span className="text-muted">
                      I agree with the{' '}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>
              </Col>
            </Row>
            <div className="text-center">
              <Button className="mt-4" color="primary" type="button">
                Create account
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
}

Register.layout = Auth;

export default Register;
