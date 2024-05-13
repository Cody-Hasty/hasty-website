type StatusBannerComponentProps = {
  apiResponse: Response,
  customSuccessMsg?: string,
  customErrorMsg?: string,
}

export default function StatusBannerComponent({ apiResponse, customSuccessMsg, customErrorMsg }: StatusBannerComponentProps) {
  const msgOnSuccess = customSuccessMsg || apiResponse.statusText
  const msgOnError = customErrorMsg || apiResponse.statusText

  return (
    <div className={`alert alert-${apiResponse.ok ? "success" : "danger"}`} role='alert'>
      <strong className='font-bold mr-2'>{apiResponse.ok ? "Success" : "Error"}:</strong>
      <span className='block sm:inline'>{apiResponse.ok ? msgOnSuccess : msgOnError}</span>
    </div>
  )
}