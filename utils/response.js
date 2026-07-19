/**
 * Standardized API response helpers
 */

const success = (res, data, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
  });
};

const created = (res, data) => {
  return res.status(201).json({
    success: true,
    data,
  });
};

const error = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

const notFound = (res, resource = "Resource") => {
  return res.status(404).json({
    success: false,
    message: `${resource} introuvable`,
  });
};

module.exports = { success, created, error, notFound };
