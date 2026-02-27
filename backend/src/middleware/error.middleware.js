const errorMiddleware = (err, req, res, next) => {
  console.error({
    route: req.originalUrl,
    method: req.method,
    body: req.body,
    token: req.token,
    userId: req.userId,
    message: err.message,
    stack: err.stack,
  });

  if (err.name === "TokenExpiredError") {
    res.status(401).json({ code: 401, error: err.name });
    return;
  }
  if (err.errors) {
    err.errors.forEach((subError, index) => {
      console.error(`--- Sub-Error ${index} ---`);
      console.error(subError.stack); // Longjohn attaches the async trace here
    });
  }
  res.status(500).json({ error: err.message });
};

export default errorMiddleware;
