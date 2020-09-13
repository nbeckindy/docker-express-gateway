module.exports = {
  name: 'rewrite',
  policy: (actionParams) => {
    return (req, res, next) => {
      req.url = req.url.replace('/api/', '/api/v2/');
      next();
    }
  }
}