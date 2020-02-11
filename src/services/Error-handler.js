const binaryRegExp = /^[0-1]{1,32}$/g;

function checkError(value) {
  let error = '';
  if (value.match(binaryRegExp) !== null) {
    error = '';
  } else {
    if (value.length > 32) {
      error = 'upto 32-bits supported here!';
    } else {
      error = 'please enter a valid binary number!';
    }
  }
  return { error };
}

export default checkError;
