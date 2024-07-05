// helpers/formValidation.js
export const validateForm = (data) => {
    const errors = {};
  
    if (!data.name) {
      errors.name = 'Name is required';
    }
  
    if (!data.phone) {
      errors.phone = 'Phone is required';
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(data.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };
  