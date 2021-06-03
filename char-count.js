function charcount(str) {
  let result = {};
  let lowerStr = str.toLowerCase();
  for (chr of str) {
    //     REGEX TESTING IS SLOW SO WE ARE CHOOSING CHARCODEAT
    //     if(/[a-z0-9]/.test(chr)) {
    //       result[chr] = ++result[chr] || 1;
    //     }
    if(isAlphaNumericChar(chr)) {
      result[chr] = ++result[chr] || 1;
    }
  }
  return result;
}

function isAlphaNumericChar(chr) {
  let code = chr.charCodeAt(0);
  if(!(code > 47 && code < 58) &&
     !(code > 64 && code < 91) &&
     !(code > 96 && code < 123)
    ) {
    return false;
  }
  return true;
}
