import { ValidationErrors } from "@angular/forms";

interface ErrorMessages {
  [key: string]: string;
}

const ERROR_MESSAGES: ErrorMessages = {
  required: 'This field is required'
}


export function getErrorMessage(errors: ValidationErrors | null | undefined) {
  let message: string = '';

  if (errors) {
    const keys = Object.keys(errors)
    const firstKey = keys[0];
    message = ERROR_MESSAGES[firstKey];
  }

  return message;
}
