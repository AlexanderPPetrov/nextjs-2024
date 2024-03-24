'use client' // :(
import { Form, Button } from 'react-bootstrap'
import * as yup from "yup"
import {Formik, useFormik} from "formik";
function LoginForm() {
    //TODO add validation and handling

    //TODO homework create registration form with validation

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = yup.object({
        email: yup.string().required().email().max(50),
        password: yup.string().required().min(6).max(30)
    })

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div className={"card mt-5"}>
            <div className={"card-body"}>
                <Form noValidate onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                                      name="email"
                                      placeholder="Enter email"
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                      isInvalid={Boolean(formik.errors.email)}
                        />
                        <Form.Control.Feedback type={"invalid"}>
                            {formik.errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      name="password"
                                      placeholder="Password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange}
                                      isInvalid={Boolean(formik.errors.password)}
                        />
                        <Form.Control.Feedback type={"invalid"}>
                            {formik.errors.password}
                        </Form.Control.Feedback>
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