function slugifyDashed(string) {
  return string.trim()
    .replace(/[&]/g, '-and-')
    .replace(/[.!'"$£%+?#[]()*%^:`]/g, '')
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/\r\n/g, '\n')
    .toLowerCase();
}

const stripSpecialCharacters = (string) => string.replace(/[.!'"$£%+?#[]()*%^:`]/g, '');

module.exports = {
  slugifyDashed,
  stripSpecialCharacters
};