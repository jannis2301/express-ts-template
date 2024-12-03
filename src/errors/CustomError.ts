type ErrorConfig = {
  statusCode: number;
  defaultMessage: string;
};

const ErrorTypes: Record<string, ErrorConfig> = {
  BadRequestError: { statusCode: 400, defaultMessage: 'Bad Request' },
  NotFoundError: { statusCode: 404, defaultMessage: 'Not found' },
  InternalServerError: {
    statusCode: 500,
    defaultMessage: 'Internal Server Error',
  },
  NetworkError: {
    statusCode: 503,
    defaultMessage: 'Service Unavailable',
  },
};

export class CustomError extends Error {
  readonly statusCode: number;

  constructor(message: string, statuscode: number) {
    super(message);
    this.statusCode = statuscode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Ensure that the prototype chain is correctly set up
    Object.setPrototypeOf(this, new.target.prototype);
  }

  serialize(): { message: string; statuscode: number } {
    return { message: this.message, statuscode: this.statusCode };
  }
}

export class ApplicationError extends CustomError {
  readonly errorType: string;

  constructor(errorType: keyof typeof ErrorTypes, message?: string) {
    const config = ErrorTypes[errorType];

    // Ensure the message & statucode are set correctly
    super(message || config.defaultMessage, config.statusCode);
    this.errorType = errorType;

    // Set the prototype chain correctly
    Object.setPrototypeOf(this, ApplicationError.prototype);
  }
}
