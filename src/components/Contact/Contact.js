import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import SectionTitle from '../../common component/SectionTitle';
import { useSelector } from 'react-redux';
// import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast } from 'react-toastify';

const Contact = () => {
  const initialvalues = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  const validateSchema = yup.object({
    name: yup.string().required('Name must be required..!'),
    email: yup.string().required('Email must be required..!').email('Invalid email format'),
    phoneNumber: yup.string().required('Phone number must be required..!').matches(/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/, 'Invalid phone number'),
    message: yup.string().required('Message must be required..!')
  });

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } = useFormik({
    initialValues: initialvalues,
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        toast.promise(
          axios.post(`${process.env.REACT_APP_BASE_URL}/touchme`, {
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
            message: values.message
          })
            .then(response => {
              return response.data;
            })
            .catch(error => {
              throw error.response.data;
            }),
          {
            pending: "Loading...",
            success: "Successfully send message..!",
            error: "Error received..!"
          },
          {
            position: 'top-center',
            autoClose: 3000,
            transition: Bounce
          }
        );
        resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  });

  let modeType = useSelector((state) => state.mode.modeValue);
  let darkModeClass = modeType ? 'contact-dark-mode' : '';

  return (
    <>
      <section className={`contact ml-300 ${darkModeClass}`} id='contact-page'>
        <div className='p-4 px-md-5 py-sm-5 px-xl-5 h-100'>
          <SectionTitle title={'Contact'}></SectionTitle>
          <div className='row mt-3' data-aos='fade-in'>
            <div className='col-xl-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
              <form onSubmit={handleSubmit} className='form-validation'>
                <div className='row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='name'>Your Name</label>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? <span className='error-text text-danger'>{errors.name}</span> : null}
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='name'>Your Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? <span className='error-text text-danger'>{errors.email}</span> : null}
                  </div>
                </div>
                <div className='form-group'>
                  <label htmlFor='name'>Phone Number</label>
                  <input
                    type='text'
                    className='form-control'
                    name='phoneNumber'
                    id='phoneNumber'
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <span className='error-text text-danger'>{errors.phoneNumber}</span>
                  ) : null}
                </div>
                <div className='form-group'>
                  <label htmlFor='name'>Message</label>
                  <textarea
                    className='form-control'
                    name='message'
                    rows={8}
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.message && touched.message ? <span className='error-text text-danger'>{errors.message}</span> : null}
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
            <div className='col-xl-5 d-flex align-items-stretch mt-4 mt-xl-0'>
              <div className='info'>
                <div className='address'>
                  <div className='icon'>
                    <FaLocationDot />
                  </div>
                  <h4>Location:</h4>
                  <p>327, Santoshi Society, Surat 395006</p>
                </div>
                <div className='email'>
                  <div className='icon'>
                    <MdEmail />
                  </div>
                  <h4>Email:</h4>
                  <p>vishalgohil424@gmail.com</p>
                </div>
                <div className='phone'>
                  <div className='icon'>
                    <FaMobileAlt />
                  </div>
                  <h4>Call:</h4>
                  <p>+91 85117 26017</p>
                </div>
                <iframe
                  title="Google Maps Embed of Santosh Nagar Society, Surat, Gujarat"
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.7728033382416!2d72.86321391585443!3d21.210202446159357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0f440e8ca5%3A0xc475d4fab9066170!2sSantosh%20Nagar%20Society%2C%20Hirabaugh%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1713889743906!5m2!1sen!2sin'
                  style={{ border: 0, width: '100%', height: 240 }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
