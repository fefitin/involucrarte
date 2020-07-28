import { useRef } from 'react';

export const updateValid = (fields, required, setValid) => {
  //Check if all required fields are ok
  const errors = required.filter(field => !fields[field] || !fields[field].length);
  const valid = errors.length === 0;
  setValid(valid);
  return valid;
};

export const triggerValidations = refs => {
  //Fire validations inside FormField
  Object.values(refs).forEach(ref => {
    ref.current.dispatchEvent(new Event('blur'));
  });
};

export const createRefs = fields => {
  const obj = {};
  fields.forEach(field => (obj[field] = useRef()));
  return obj;
};
