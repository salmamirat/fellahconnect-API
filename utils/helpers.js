/**
 * Shared utility helpers
 */

/**
 * Build Sequelize pagination options from query params
 * @param {object} query - req.query
 * @returns {{ limit: number, offset: number, page: number }}
 */
const paginate = (query) => {
  const page = Math.max(parseInt(query.page, 10) || 1, 1);
  const limit = Math.min(Math.max(parseInt(query.limit, 10) || 20, 1), 100);
  const offset = (page - 1) * limit;
  return { limit, offset, page };
};

/**
 * Pick only allowed keys from an object
 * @param {object} obj - Source object
 * @param {string[]} keys - Allowed keys
 * @returns {object}
 */
const pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = { paginate, pick };
