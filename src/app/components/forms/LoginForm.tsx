'use client' // :(
import { Form, Button } from 'react-bootstrap'
import * as yup from "yup"
import {useFormik} from "formik";
import { useEffect } from "react";
function LoginForm() {
    //TODO add validation and handling

    //TODO homework create registration form with validation

    const initialValues = {
        email: '',
        password: '',
    }

    //TODO add i18n to project and useTranslation to pass translatable validation errors

    const regex = /^[a-zA-Z0-9 !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

    const validationSchema = yup.object({
        email: yup.string()
            .required("Имейл полето е задължително")
            .email("Моля въведете валиден имейл")
            .matches(regex, {message: "Странни символи не са позволени"})
            .max(50, "Това поле не може да е повече от 50 символа"),
        password: yup.string()
            .required("Паролата е задължително поле")
            .matches(regex, {message: "Странни символи не са позволени"})
            .min(6, "Паролата трябва да е поне 6 символа")
            .max(30, "Паролата не може да е повече от 30 символа")
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
                                      data-testid="login-email"
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
                                      data-testid="login-password"
                                      placeholder="Password"
                                      value={formik.values.password}
                                      onChange={formik.handleChange}
                                      isInvalid={Boolean(formik.errors.password)}
                        />
                        <Form.Control.Feedback type={"invalid"}>
                            {formik.errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button data-testid="login-button"
                            variant="primary"
                            type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default LoginForm