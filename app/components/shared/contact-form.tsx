'use client'

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { sendEmail } from '@/utils/sendEmail';
import StatusBannerComponent from '@/components/shared/status-banner';
import { FaCheck, FaRedo } from 'react-icons/fa';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  cc: boolean;
};

export default function ContactFormComponent() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()
  const [ apiResponse, setApiResponse ] = useState<Response>()
  const [ responseStatusTimedOut, setResponseStatusTimedOut ] = useState<boolean>(true)
  const [ submitPending, setSubmitPending ] = useState<boolean>(false)

  function onSubmit(data: ContactFormData) {
    setSubmitPending(true)
    sendEmail(data).then((response) => {
      setSubmitPending(false)
      setApiResponse(response)
      setResponseStatusTimeout()
    })
  }

  function setResponseStatusTimeout() {
    setResponseStatusTimedOut(false)
    setTimeout(() => {
      setResponseStatusTimedOut(true)
    }, 5000)
  }

  function showButtonStatusIcon() {
    return !responseStatusTimedOut && !submitPending && apiResponse
  }

  function showButtonLoadingSpinner() {
    return Object.keys(errors).length == 0 && submitPending
  }

  function showBanner() {
    return apiResponse && !responseStatusTimedOut
  }

  return (
    <div>
      { showBanner() &&
        <StatusBannerComponent
          apiResponse={apiResponse as Response}
          customSuccessMsg='Email sent successfully. Thank you for reaching out!'
          customErrorMsg='Failed to send email. Please try again in a few seconds.'
        />
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4 mt-3.5'>
          <label
            htmlFor='name'
            className='mb-2 block text-base font-medium text-black'
          >
            Name
          </label>
          <input
            type='text'
            placeholder='Name'
            className='w-full rounded-md border border-gray-300 py-3 px-6'
            aria-invalid={errors.name ? "true" : "false"}
            {...register('name', { required: "Please enter a name" })}
          />
          {errors.name && <p className="text-red mt-2" role="alert">{errors.name.message}</p>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='email'
            className='mb-2 block text-base font-medium text-black'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='example@domain.com'
            className='w-full rounded-md border border-gray-300 py-3 px-6'
            aria-invalid={errors.email ? "true" : "false"}
            {...register('email', { required: "Please enter an email" })}
          />
          {errors.email && <p className="text-red mt-2" role="alert">{errors.email.message}</p>}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='message'
            className='mb-2 block text-base font-medium text-black'
          >
            Message
          </label>
          <textarea
            rows={4}
            placeholder='Type your message'
            className='resize-none w-full rounded-md border border-gray-300 py-3 px-6'
            aria-invalid={errors.message ? "true" : "false"}
            {...register('message', { required: "Please enter a message" })}
          ></textarea>
          {errors.message && <p className="text-red mt-2" role="alert">{errors.message.message}</p>}
        </div>
        <div className='mb-4 flex flex-row gap-2 items-center'>
          <input
            id='cc-checkbox'
            type='checkbox'
            {...register('cc', { required: false })}
          />
          <label htmlFor='cc-checkbox' className='text-base font-light'>Send a copy to your email</label>
        </div>
        <button className='text-white rounded-md bg-orange px-3 py-2 hover:bg-orange-200 flex flex-row gap-2 items-center'>
          {showButtonLoadingSpinner() && <span className="spinner-border spinner-border-sm" />}
          Submit
          {showButtonStatusIcon() && apiResponse?.ok && <FaCheck fill='white' />}
          {showButtonStatusIcon() && !apiResponse?.ok && <FaRedo fill='white' />}
        </button>
      </form>
    </div>
  )
}