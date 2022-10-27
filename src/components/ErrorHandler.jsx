const ErrorHandler = (errCode) => {
  if (errCode === '404') {
    return (
      <div className='not-found'>
        <h1>errCode Not Found</h1>
      </div>
    )
  }
}

export default ErrorHandler
