import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import noisy_gradient from '/noisy_gradient.jpg';

type Props = {};

export default function ContactPage({}: Props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Email is not valid').required('Email is Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);
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
            <label className="flex flex-col gap-1" htmlFor="name">
              Full Name
              <input
                className="p-4 border border-gray-400 bg-white rounded-sm"
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={formik.handleChange}
              />
            </label>
            <label className="flex flex-col gap-1" htmlFor="email">
              Email
              <input
                className="p-4 border border-gray-400 bg-white rounded-sm"
                type="email"
                id="email"
                placeholder="Your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
            <label className="flex flex-col gap-1" htmlFor="subject">
              Subject
              <input
                className="p-4 border border-gray-400 bg-white rounded-sm"
                type="text"
                id="subject"
                placeholder="Subject"
              />
            </label>
            <label className="flex flex-col gap-1" htmlFor="messageInput">
              Message
              <textarea
                className="p-4 rounded-sm min-h-[140px] border border-gray-400"
                id="message"
                placeholder="Your message"
              />
            </label>
            <button type="submit" className="p-2 text-white bg-blue-600 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
