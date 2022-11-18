import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const validateForm = (values) => {
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Mandatory field - email is not filled';
    } else if (values.email.length > 30) {
      errors.email = 'Email cannot contain more than 30 characters';
    }
  
    if (!values.password) {
      errors.password = 'Mandatory field - password is not filled';
    } else if (values.password.length > 50) {
      errors.password = 'Password cannot contain more than 50 characters';
    }

    if (!values.passwordConfirmation) {
        errors.passwordConfirmation = 'Mandatory field - cofirm password';
      } else if (values.password !== values.passwordConfirmation) {
        errors.passwordConfirmation = 'Password confirmation does not match original password'
      } else if (values.passwordConfirmation.length > 50) {
        errors.passwordConfirmation = 'Password confirmation cannot contain more than 50 characters';
      }

      if (!values.phoneNumber) {
        errors.phoneNumber = 'Mandatory field - phone number is not filled';
      } else if (values.phoneNumber.length > 20) {
        errors.phoneNumber = 'Phone number cannot contain more than 20 characters';
      }

      if (values.firstName.length > 40) {
        errors.firstName = 'Name cannot contain more than 40 characters';
      }

      if (values.streetName.length > 30) {
        errors.streetName = 'Streetname cannot contain more than 30 characters';
      }

      if (values.city.length > 20) {
        errors.city = 'City cannot contain more than 20 characters';
      }

      if (values.postCodeNumber.length > 6) {
        errors.citypostCodeNumber = 'PostCode cannot contain more than 6 characters';
      }

      if (values.notes.length > 100) {
        errors.notes = 'Notes cannot contain more than 100 characters';
      }

      if (!values.checked) {
        errors.checked = 'You have to confirm processing of data before submitting the form';
      }

      if (!values.subscribed) {
        errors.subscribed = 'You have to choose whether you want to recieve newsletter';
      }
  
    return errors;
  };

const EshopRegistration = () => {

    return (

        <Formik
            initialValues={{
                email: '',
                password: '',
                passwordConfirmation: '',
                phoneNumber: '',
                firstName: '',
                streetName: '',
                city: '',
                postCodeNumber: '',
                subscribed: '',
                citySelect:'',
                notes:'',
                checked:''


            }}
            onSubmit={(values, {setSubmitting}) => {
              console.log(values);
              setSubmitting(false);
            }}
            validate= {validateForm}
        >

            <Form>
                <div>
                    <h2>Registration data</h2>
                    <label htmlFor="email">Email*</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" component="p" />
                    <br/>

                    <label htmlFor="password">Password*</label>
                    <Field name="password" type="text" />
                    <ErrorMessage name="password" component="p" />
                    <br/>

                    <label htmlFor="passwordConfirmation">Password Confirmation*</label>
                    <Field name="passwordConfirmation" type="text" />
                    <ErrorMessage name="passwordConfirmation" component="p" />
                    <br/>

                    <label htmlFor="phoneNumber">Phone Number*</label>
                    <Field name="phoneNumber" type="text" />
                    <ErrorMessage name="phoneNumber" component="p" />
                    <br/>
                </div>

                <div>
                    <h2>Invoice data</h2>
                    <label htmlFor="firstName">Name&Surname / Company Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="p" />
                    <br/>

                    <label htmlFor="streetName">Street</label>
                    <Field name="streetName" type="text" />
                    <ErrorMessage name="streetName" component="p" />
                    <br/>

                    <label htmlFor="city">City</label>
                    <Field name="city" type="text" />
                    <ErrorMessage name="city" component="p" />
                    <br/>

                    <label htmlFor="postCodeNumber">PostCode</label>
                    <Field name="postCodeNumber" type="text" />
                    <ErrorMessage name="postCodeNumber" component="p" />
                    <br/>
                </div>

                <div>
                    <h2>Other</h2>
                    <label htmlFor="citySelect">Preferred picking up point </label>
                    <Field name="citySelect" type="text" as="select" >
                        <option value="A">Praha</option>
                        <option value="B">Brno</option>
                        <option value="C">Ostrava</option>
                        <option value="D">Olomouc</option>
                        <option value="E">Karlovy Vary</option>
                    </Field>
                    <ErrorMessage name="lastName" component="p" />
                    <br />

                    {/*<label htmlFor="newsletter">Newsletter subscripiton</label>*/}
                    {/*<div id="my-radio-group">Picked</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="picked" value="YES" />
                            YES
                        </label>
                        <label>
                            <Field type="radio" name="picked" value="NO" />
                            NO
                        </label>
                        <div>Picked: {values.picked}</div>
                    </div>*/}
                    {/*<label>
                        <Field type="checkbox" name="newsletter" />
                             
                  </label>*/}

                    
                    <div id="my-radio-group">Newsletter subscription</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                        <Field type="radio" name="subscribed" value="YES" />
                        YES
                        </label>
                        <label>
                        <Field type="radio" name="subscribed" value="NO" />
                        NO
                        </label>
                    </div>
                    <ErrorMessage name="subscribed" component="p"/>           
                                  

                    <br/>
                    <label htmlFor="notes">Notes (max 100 char)</label>
                    <Field name="notes" type="text" as="textarea" />
                    <ErrorMessage name="notes" component="p"/>
                </div>

                <div>
                    <h2>Confirmation with data processing</h2>
                    <label>
                        <Field type="checkbox" name="checked" />
                             I confirm with processing of filled data
                    </label>
     
                    <ErrorMessage name="checked" component="p"/>
                    <br/>
                </div>

                <button type="submit">Odeslat</button>
            </Form>
        </Formik>

    )

};

export default EshopRegistration;
