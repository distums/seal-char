import sealChar from './sealChar';

function shouldSealChineseName(current, index, fullName) {
  if (fullName.length === 2) return index === 1;
  if (fullName.length === 4) return index === 1 || index === 2;
  return index > 0;
}

export default sealChar.bind(null, '*', shouldSealChineseName);
