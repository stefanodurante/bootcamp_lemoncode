export const onUpdateField = (id, callback) => {
  const element = document.getElementById(id);
  element.oninput = event => callback(event);

  if (element.type !== 'checkbox') {
    element.onblur = event => callback(event);
  }
};

export const onSubmitForm = (id, callback) => {
  const element = document.getElementById(id);
  element.onclick = e => {
    e.preventDefault();
    callback();
  };
};

export const onSetError = (id, error) => {
  const element = document.getElementById(id);
  const messageElement = document.getElementById(`${id}-error`);

  if (error.succeeded) {
    element.classList.remove('error');
    messageElement.textContent = '';
  } else {
    element.classList.add('error');
    messageElement.textContent = error.message;
  }
};

export const onSetFormErrors = ({ fieldErrors }) => {
  Object.entries(fieldErrors).forEach(([key, value]) => {
    onSetError(key, value);
  });
};

const setValue = (element, value) => {
  const elementType = element.tagName.toLowerCase();
  if (elementType === 'select' || elementType === 'input') {
    element.value = value;
  } else {
    element.textContent = value;
  }
};

const onSetValue = (id, value) => {
  const element = document.getElementById(id);
  console.log({ element });
  if (element) {
    setValue(element, value);
  }
};

export const onSetValues = values => {
  Object.entries(values).forEach(([key, value]) => onSetValue(key, value));
};
