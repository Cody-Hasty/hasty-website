'use client'

import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/sendEmail';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactFormComponent() {
  const { register, handleSubmit } = useForm<ContactFormData>()

  function onSubmit(data: ContactFormData) {
    sendEmail(data)
  }

  return (
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
          {...register('name', { required: true })}
        />
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
          {...register('email', { required: true })}
        />
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
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <button className='text-white rounded-md bg-orange px-3 py-2 hover:bg-orange-200'>
        Submit
      </button>
    </form>
  )
}