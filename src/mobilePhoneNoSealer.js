import sealChar from './sealChar';

function shouldSealPhoneNo(_, index, source) {
  const startIndex = 3;
  const endIndex = 8;
  let offset = source.length - 11;
  if (offset < 0) {
    offset = 0;
    console.warn(
      `source string: "${source}" is not a valid phone number.Try check your data or use other method`
    );
  }
  return index > startIndex + offset && index < endIndex + offset;
}

export default sealChar.bind(null, '*', shouldSealPhoneNo);
