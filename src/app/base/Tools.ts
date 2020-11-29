export class Tools {

  public static alphabetCryllicArray: any[] = [
    { code: 0, name : 'Тэг' },
    { code: 1, name : 'Нэг' },
    { code: 2, name : 'Хоёр' },
    { code: 3, name : 'Гурав' },
    { code: 4, name : 'Дөрөв' },
    { code: 5, name : 'Тав' },
    { code: 6, name : 'Зургаа' },
    { code: 7, name : 'Долоо' },
    { code: 8, name : 'Найм' },
    { code: 9, name : 'Ес' }
  ];

  public static convertToCryllic(char){
    const filtered = this.alphabetCryllicArray.filter(it => this.compareValue(it.code, char));
    return this.isNullOrEmptyArray(filtered) ? '' : filtered[0].name;
  }

  public static compareValue(valueFirst, valueSecond) {
    return this.convertToString(valueFirst) === this.convertToString(valueSecond);
  }

  public static convertToString(value) {
    return value == null ? '' : value.toString().trim();
  }

  public static isNullOrEmptyArray(array) {
    return array == null || array.length === 0;
  }
}
