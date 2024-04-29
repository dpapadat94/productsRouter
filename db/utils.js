import connection from ".";

/**
 * Return a promise that resolves with the results of a SQL query or an error.
 *
 * @param {string} qrystr
 * @param {Array | any } values
 * @returns The results of a SQL query
 */
const query = (qrystr, values) => {
  return new Promise((resolve, reject) => {
    connection.query(qrystr, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export default query;
