import { useRef, useState } from 'react';

const FormField = React.forwardRef(
  (
    {
      type = 'text',
      rows = 10,
      required = false,
      error = 'El valor ingresado es inválido.',
      placeholder,
      onChange,
    },
    ref
  ) => {
    const input = ref || useRef();
    const [value, setValue] = useState('');
    const [valid, setValid] = useState(true);

    const updateValue = e => {
      setValue(e.target.value);
      if (input.current.checkValidity()) {
        setValid(true);
        onChange(e.target.value);
      } else {
        setValid(false);
        onChange('');
      }
    };

    return (
      <div className={`field ${!valid ? 'error' : ''}`}>
        {type === 'textarea' ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            onChange={updateValue}
            onBlur={updateValue}
            value={value}
            required={required}
            ref={input}
          ></textarea>
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            onChange={updateValue}
            onBlur={updateValue}
            value={value}
            required={required}
            ref={input}
          />
        )}
        {!valid ? <p className="message">{error}</p> : null}
      </div>
    );
  }
);

export default FormField;
