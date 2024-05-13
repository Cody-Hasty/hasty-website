import { ContactFormData } from '@/components/contact/contact-form';

export function sendEmail(data: ContactFormData): Promise<Response> {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}