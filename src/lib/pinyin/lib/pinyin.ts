import {
  getTextPinyin,
  getMultipleTone,
  getPinyinWithoutTone,
  getInitialAndFinal,
  getNumOfTone,
  getPinyinWithNum,
  getFirstLetter,
} from './handle';

interface RES {
  pinyin: string;
  initial: string;
  final: string;
}

function pinyinFn(word: string): RES {
  // word传入类型错误时
  if (typeof word !== 'string') {
    return word;
  }
  // 传入空字符串
  if (!word) {
    return {
      pinyin: '',
      initial: '',
      final: ''
    };
  }

  // 获取原始拼音
  let pinyin = getTextPinyin(word, word.length);


  pinyin = getPinyinWithoutTone(pinyin);  // 不加音调

  const initial = getInitialAndFinal(pinyin)
  return {
    pinyin,
    initial: initial.initial,
    final: initial.final
  }
}

export { pinyinFn, getMultipleTone };
