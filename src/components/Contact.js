import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { MessageField } from './MessageField';
import '../App.css';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const Contact = () => {

  const validate = Yup.object({
    name: Yup.string()
      .min(4, "Must be at least 4 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
  })

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validationSchema={validate}
      onSubmit={(values, {setSubmitting, resetForm})=>{
        setTimeout(()=>{
          const templateParams = {
            from_name: values.name + " (" + values.email + ")",
            to_name: "Gibbs Herbert Akena",
            message: values.message
          }
          emailjs.send("service_gd0v61s", "template_9cmmznv", 
            templateParams, "user_KDK7wflsBaBv97zUBR9YX")
            .then((response)=>{
              alert('Your message has been sent!')
              resetForm()
              setSubmitting(false)
            }, (err) => {
              console.log(err)
            })
        }, 1000)
    }}
    >
      {props => (
        <div className="contact padding">
          <h1 className="mt-4 text-center">Contact Me</h1>
          <div className="container">
            <div className="row padding">
              <div className="col-md-3">
              </div>
              <div className="col-sm-12 col-md-6">
                <Form className="form">
                  <TextField label="Name" name="name" type="text" />
                  <TextField label="Email Address" name="email" type="email" />
                  <MessageField label="Message" name="message" type="text" />
                  <button className="btn mt-3" type="submit">
                    {/* Submit */}
                    {props.isSubmitting ? "SUBMITTING...": "SUBMIT"}
                  </button>
                </Form>
              </div>
              <div className="col-md-3">
              </div>
            </div>
          </div>
        </div>
      )}

    </Formik>
  )
}

export default Contact;