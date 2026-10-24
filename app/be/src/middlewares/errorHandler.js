const errorHandler = (err, req, res, next) => {
  if (res.headerSent) return next(err);
  let error = err;
  console.log(error);
  const message = error.message;
  const statusCode = error.statusCode;
  const details = error.details;
  const response = {
    success: false,
    message,
  };
  if (details.length > 0) response.details = details;
  return res.status(statusCode).json(response);
}

export default errorHandler;