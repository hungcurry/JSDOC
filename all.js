

// ?--------------------
// @param：函式參數
// @returns：函式回傳值
// @example：使用範例
// @typedef：自定義型別
// @global：跨檔案使用 @typedef
// @property：物件屬性
// @type：型別
// ?--------------------

// msg :變數

let num = 3;
let str = 'string';
let boolean = true;
/**
 * 我的年齡.
 * @type {number}
 */
const myAge = 18;
/**
 * 我的名子.
 * @type {string}
 */
const myName = 'curry';


// msg :陣列

// ~單型別陣列
/**
 * 我的名字
 * @type { string[] }
 */
const nameAry = ['Ray', 'John'];
// ~多型別陣列
/**
 * 我的名字2
 * @type {Array.<string|number>}
 */
const nameAry2 = ['Ray', 'John', 1];


// msg :物件
/**
 * 我的名字
 * @type { { name: string, age: number } }
 */
const nameObj = {
  name: 'Ray',
  age: 18,
};
// !類型 '{ name: string; age: number; }' 沒有屬性 'gener'
// nameObj.gener = '18';


// msg :混和物件陣列
/**
 * 物件包陣列
 * @type { { name: string, age: number[] } }
 */
const objArr = {
  name: 'Ray',
  age: [ 10, 20, 30 ],
}

/**
 * 陣列包物件
 * @type {Array.<{name: string, age: number}>}
 */
const arrObj = [
  {
    name: 'Ray',
    age: 18,
  },
]


// msg: function

// ~01.實戰開發: 傳入字串
/**
 * Returns a greeting message.
 * @param { string | number } name 名子.
 * @returns { string } return Hi, ${name}
 * @example
 * sayHi('curry') => 'Hi, curry'
 */
const sayHi = (name) => {
  return `Hi, ${name}`
}
sayHi('curry')


// ~02.實戰開發: 傳入物件
/**
 * 這是一個用於問候的函式，根據傳入的名字和年齡回傳問候語句。
 * @param {object} obj - 包含名字和年齡的物件。
 * @param {string} obj.name - 名字。
 * @param {number} obj.age - 年齡。
 * @returns {string} - 問候語句。
 * @example
 * sayHi2({ name: 'John', age: 18 }); // Hi, John
 */
const sayHi2 = ({ name, age }) => {
  return `Hi, ${name}，今年 ${age} 歲`;
};
sayHi2({ name: 'curry', age: 20 });


// ~03.實戰開發: 傳入陣列
/**
 * 這是一個回傳問候語的函式
 * @param {Array.<string|number>} ary - 包含名字和年齡的陣列
 * @returns {string} - 問候語
 */
const sayHi4 = ([ name, age ]) => {
  return `Hi, ${name}，今年 ${age} 歲`;
};
sayHi4(['John' , 30]);


// ~04.實戰開發: 傳入函式
/**
 * 這是一個回傳問候語的函式
 * @param {Function} callback - callback 回呼函式
 * @returns {string} - The greeting message.
 * // ~@returns { void } 如果函式沒打算回傳值的話，那就可以使用 void 來定義
 */
const sayHi3 = (callback) => {
  return `Hi, ${callback()}`;
};
sayHi3(() => 'John');


// msg: 進階寫法 - @template 類似TS:泛型
/**
 * @template T
 * @param {T} x 參數 x
 * @returns {Promise<T>}
 */
function iAmSoShock(x) {
  return Promise.resolve(x)
}


// msg: 進階寫法 - @enum 類型
/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};

JSDocState.SawAsterisk;


// msg: 進階寫法 - @typedef 類似TS:interface
// 通常會把 @typedef 定義在 types.js 檔案中，
// 所以會建立一個資料夾叫做 types，然後在裡面建立 index.js 檔案
// /**
//  * @typedef { object } User 選項
//  * @property { string } name 名字
//  * @property { number } age 年齡
//  * @global 匯出變成全域變數
//  */

/**
 * @type { User }
 */
const user = {
  name: 'Ray',
  age: 18,
};
/**
 * 打招呼函式
 * @param { User } user 使用者資料
 * @returns { string } Hi, ${name}
 * @example
 * sayHiFn({ name: 'John', age: 18 }); // Hi, John
 */
const sayHiFn = ({ name, age }) => {
  return `Hi, ${name}，今年 ${age} 歲`;
};
sayHiFn(user)



// msg: 匯入方式

// ~@global匯入方式
// !缺點 會比較看不出來型別定義是從哪來的
// 所以會建立一個資料夾叫做 types，然後在裡面建立 index.js 檔案
// /**
//  * @typedef { object } User 選項
//  * @property { string } name 名字
//  * @property { number } age 年齡
//  * @global 匯出變成全域變數
//  */

/**
 * @type { Products[] }
 */
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Conditioner', price: 3.99 },
  { name: 'Comb', price: 2.99 },
];

/**
 * 計算總價
 * @param { Products[] } products 產品資料
 * @returns { number } 總價
 * @example
 * sumPrice(products); // 11.97
 */
const sumPrice = (products) => {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
}
sumPrice(products);



// ~具名匯入方式
import { test } from './tool'
const Str = test('白爛貓')


// ~全部匯入方式
import * as Schemas from './Schemas.js'

// TS寫法
// let user:Schemas.User = { name: 'curry' , gender:'male'}

// JSDOC寫法
/** @type { Schemas.Products } */
const product = { name: 'curry' , gender:'male'}
// !類型 'Products' 沒有屬性 'age'。
// product.age = 18;
