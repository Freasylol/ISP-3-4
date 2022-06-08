import React from 'react';
import {Field, Formik} from "formik";
import  * as Yup from "yup";
import Axios from 'axios';
import { Button, TextField, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    input: {
        lineHeight: '1.5em',
        padding: '4px 6px',
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
    },
    form: {
        display: 'block',
        fontFamily: 'Arial Helvetica, sans-serif',
        position: 'relative',
        padding: '0 24px 24px 24px',
        margin: 'auto',
    },
    error: {
        color: 'red',
        fontWeight: 700,
        fontSize: '13px',
    } 
}))

const RegistrationForm = () => {
    const classes = useStyles();

    const submitRegistration = values => {
      Axios.post('http://localhost:3001/users/registration', {
        name: values.name, 
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        userRole: values.userRole ? 'admin' : 'user',
      })
    }

  const validationSchema = Yup.object().shape({
      name: Yup.string().typeError('Should be a string').required('Necessarily'),
      lastName: Yup.string().typeError('Should be a string').required('Necessarily'),
      password: Yup.string().typeError('Should be a string').required('Necessarily'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')],'passwords do not match').required('Necessarily'),
      email: Yup.string().email('enter correct email').required('Necessarily'),
  })

  return (
<div>
  <Formik
  initialValues={{
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      userRole: '',
  }}
a
  validateOnBlur
  onSubmit={values => submitRegistration(values)}
  validationSchema={validationSchema}
  >
      {({values, errors, touched, handleChange, handleBlur, 
      isValid, handleSubmit, dirty}) => (<div className={classes.form}>
          <p>
              <TextField label="First name"
                  className={classes.input}
                  type={`text`}
                  name={`name`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
              />
          </p>

          {touched.name && errors.name && <p className={classes.error}>{errors.name}</p>}

          <p>
              <TextField label="Last name"
                  className={classes.input}
                  type={`text`}
                  name={`lastName`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
              />
          </p>

          {touched.lastName && errors.lastName && <p className={classes.error}>{errors.lastName}</p>}

          <p>
              <TextField label="Email"
                  className={classes.input}
                  type={`email`}
                  name={`email`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
              />
          </p>
          {touched.email && errors.email && <p className={classes.error}>{errors.email}</p>}
          
          <p>
              <TextField label="Password"
                  className={classes.input}
                  type={`password`}
                  name={`password`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}

              />
          </p>
          {touched.password && errors.password && <p className={classes.error}>{errors.password}</p>}
          <p>
              <TextField label="Confirm password"
                  className={classes.input}
                  type={`password`}
                  name={`confirmPassword`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}

              />
          </p>
          {touched.confirmPassword && errors.confirmPassword && <p className={classes.error}>{errors.confirmPassword}</p>}

          <div>
            <Typography>
              <Field type="checkbox" name="userRole"/>
              Administrator
            </Typography>
          </div>

          <Button
          disabled={!isValid && !dirty}
          onClick={handleSubmit}
          type={`submit`}
          >Submit
          </Button>
      </div>)}
  </Formik>
</div>
  )
}

export default RegistrationForm;


