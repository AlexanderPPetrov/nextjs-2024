'use client' // :(
import { Form, Button } from 'react-bootstrap'
function LoginForm() {
    //TODO add validation and handling

    //TODO homework create registration form with validation
    return (
        <div className={"card mt-5"}>
            <div className={"card-body"}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default LoginForm