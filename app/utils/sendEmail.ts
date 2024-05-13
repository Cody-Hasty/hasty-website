import { ContactFormData } from '@/components/shared/contact-form';

export function sendEmail(data: ContactFormData): Promise<Response> {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}