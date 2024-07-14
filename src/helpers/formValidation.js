export const validateForm = (data) => {
  const errors = {};

  // Name validation
  if (!data.name) {
    errors.name = 'שדה חובה';
  } else {
    const nameParts = data.name.trim().split(' ');
    if (nameParts.length < 2) {
      errors.name = 'יש להזין שם פרטי ושם משפחה';
    } else if (nameParts[0].length < 2) {
      errors.name = 'השם הפרטי צריך להכיל יותר מאות אחת';
    }
  }

  // Phone validation
  if (!data.phone) {
    errors.phone = 'שדה חובה';
  } else {
    const phonePattern = /^05\d{8}$/;
    if (!phonePattern.test(data.phone)) {
      errors.phone = 'מספר טלפון לא תקין';
    }
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!data.email) {
    errors.email = 'שדה חובה';
  } else if (!emailPattern.test(data.email)) {
    errors.email = 'כתובת מייל לא תקינה';
  }

  return errors;
};
