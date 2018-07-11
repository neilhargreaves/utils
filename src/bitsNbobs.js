function slugifyDashed(string){
  let sanitisedString = stripSpecialCharacters(string);
  sanitisedString = sanitisedString.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-');
  sanitisedString = stripDoubleHyphen(sanitisedString);
  return stripEndOfLineHyphen(sanitisedString);
}

const stripEndOfLineHyphen = (string) => string.replace(/[^a-zA-Z0-9]?-$/g, '');
const stripDoubleHyphen = (string) => string.replace().replace(/-{2,}/g, '-');
const stripSpecialCharacters = (string) => string.replace(/[.&!'"$£%+:]/g, '');

function convertLineEndings(str) {
  return str.replace(/\r\n/g, '\n')
}

module.exports = {
  slugifyDashed,
  convertLineEndings,
  stripSpecialCharacters
};