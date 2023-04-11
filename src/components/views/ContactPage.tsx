import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import noisy_gradient from '/noisy_gradient.jpg';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {};

export default function ContactPage({}: Props) {
  const [animationParent] = useAutoAnimate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Full Name is Required').min(3, 'Minimum number of characters is 3'),
      email: Yup.string().email('Email is not valid').required('Email is Required'),
      subject: Yup.string().required('Subject is Required').min(3, 'Minimum number of characters is 3'),
      message: Yup.string().required('Message is Required').min(3, 'Minimum number of characters is 3'),
    }),
    onSubmit: (values) => {
      alert(`Name: ${values.name} Email: ${values.email} Subject: ${values.subject} Message: ${values.message}`);
    },
  });

  const errorClasses = 'border-2 border-red-600';

  return (
    <main className="flex flex-col bg-gray-200 p-4">
      <div className="text-center mt-9">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <h1 className="text-gray-500">Any questions? Hit us up with a question</h1>
      </div>
      <div className="flex w-full max-w-6xl mx-auto m-10 bg-white p-4 rounded-3xl">
        <div
          className={`bg-[url("/noisy_gradient.jpg")] hidden flex-col gap-10 md:flex md:w-2/5 rounded-xl p-10 text-white`}
        >
          <div className="flex flex-col max-w-xs text-gray-300">
            <h3 className="text-2xl font-bold text-white">Contact information</h3>
            Fill up the form and our team will get back to you within 24 hours
          </div>
          <div className="flex flex-col max-w-xs text-gray-300">
            <h4 className="text-xl font-bold text-white">Phone</h4>
            +47 43 435 000
          </div>
          <div className="flex flex-col max-w-xs text-gray-300">
            <h4 className="text-xl font-bold text-white">Email</h4>
            suport@shopphopp.no
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <form onSubmit={formik.handleSubmit} action="" className=" flex flex-col gap-4 max-w-3xl p-6">
            <label ref={animationParent} className="flex flex-col gap-1" htmlFor="name">
              Full Name
              {formik.touched && formik.errors.name && (
                <div className="text-red-800 font-bold">{formik.errors.name}</div>
              )}
              <input
                className={`p-4 border border-gray-400 bg-white rounded-sm ${
                  formik.touched && formik.errors.name && errorClasses
                }`}
                type="text"
                id="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label ref={animationParent} className="flex flex-col gap-1" htmlFor="email">
              Email
              {formik.touched && formik.errors.email && (
                <div className="text-red-800 font-bold">{formik.errors.email}</div>
              )}
              <input
                className={`p-4 border border-gray-400 bg-white rounded-sm ${
                  formik.touched && formik.errors.email && errorClasses
                }`}
                type="email"
                id="email"
                placeholder="Your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label ref={animationParent} className="flex flex-col gap-1" htmlFor="subject">
              Subject
              {formik.touched && formik.errors.subject && (
                <div className="text-red-800 font-bold">{formik.errors.subject}</div>
              )}
              <input
                className={`p-4 border border-gray-400 bg-white rounded-sm ${
                  formik.touched && formik.errors.subject && errorClasses
                }`}
                type="text"
                id="subject"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label ref={animationParent} className="flex flex-col gap-1" htmlFor="messageInput">
              Message
              {formik.touched && formik.errors.message && (
                <div className="text-red-800 font-bold">{formik.errors.message}</div>
              )}
              <textarea
                className={`p-4 border border-gray-400 bg-white rounded-sm ${
                  formik.touched && formik.errors.message && errorClasses
                }`}
                id="message"
                placeholder="Your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <button
              disabled={!(formik.isValid && formik.dirty)}
              type="submit"
              className="p-2 text-white bg-blue-600 rounded-lg disabled:bg-slate-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
