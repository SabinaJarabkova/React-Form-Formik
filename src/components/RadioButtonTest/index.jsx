import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';



const RadioButtonTest = () => {

    return(

    <div>
        <h1>Newsletter subscription</h1>
            <Formik
            initialValues={{
                subscribed: '',
            }}
            onSubmit={(values, {setSubmitting}) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
            {({ values }) => (
                    <Form>
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
                        {/*<div>Picked: {values.picked}</div>*/}
                    </div>

                    <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
    </div>
)};

export default RadioButtonTest;