const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const result = excelToJson({
  sourceFile: 'test.xlsx'
});

let sheet = result['手机版'];
let resV = {};
let res = {};


//简体中文
for (let i = 0; i < sheet.length; i++) {
  res[sheet[i].A] = sheet[i].B;
}

fs.writeFile('i18n/cn.json', JSON.stringify(res), err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});


//繁体中文
for (let i = 0; i < sheet.length; i++) {
  res[sheet[i].A] = sheet[i].C;
}
fs.writeFile('i18n/tw.json', JSON.stringify(res), err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});

//英文
for (let i = 0; i < sheet.length; i++) {
  res[sheet[i].A] = sheet[i].D;
}
fs.writeFile('i18n/en.json', JSON.stringify(res), err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }

});


//越南文
for (let i = 0; i < sheet.length; i++) {
  resV[sheet[i].A] = sheet[i].E;
}

fs.writeFile('i18n/vn.json', JSON.stringify(resV), err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});
