const loggerMiddleware = (req, res, next) => {
  const start = Date.now();
  const { method, originalUrl, query } = req;

  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    const logDetails = {
      method,
      url: originalUrl,
      query,
      statusCode,
      durationMs: duration,
    };
    console.log('🚀 ~ loggerMiddleware :', logDetails);
  });

  next();
};

module.exports = loggerMiddleware;
