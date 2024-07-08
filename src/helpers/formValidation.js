// helpers/formValidation.js
export const validateForm = (data) => {
    const errors = {};
  
    if (!data.name) {
      errors.name = 'שדה חובה';
    }
  
    if (!data.phone) {
      errors.phone = 'שדה חובה';
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!data.email) {
      errors.email = 'שדה חובה';
    } else if (!emailPattern.test(data.email)) {
      errors.email = 'כתובת מייל לא תקינה';
    }
  
    return errors;
  };
  