function UnauthorizedError (code, error) {
  Error.call(this, error.message);
  this.message = error.message;
  this.code = code;
  this.status = 401;
  this.inner = error;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;
