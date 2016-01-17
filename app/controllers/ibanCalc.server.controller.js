var NUMBER_REGEX = /^\d+$/;
var LETTER_REGEX = /[A-Z]/;
var strint = require('./strint');


function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function convertLetters(input) {
   convTable = {};
   convTable['A'] = '10';
   convTable['B'] = '11';
   convTable['C'] = '12';
   convTable['D'] = '13';
   convTable['E'] = '14';
   convTable['F'] = '15';
   convTable['G'] = '16';
   convTable['H'] = '17';
   convTable['I'] = '18';
   convTable['J'] = '19';
   convTable['K'] = '20';
   convTable['L'] = '21';
   convTable['M'] = '22';
   convTable['N'] = '23';
   convTable['O'] = '24';
   convTable['P'] = '25';
   convTable['Q'] = '26';
   convTable['R'] = '27';
   convTable['S'] = '28';
   convTable['T'] = '29';
   convTable['U'] = '30';
   convTable['V'] = '32';
   convTable['W'] = '33';
   convTable['X'] = '34';
   convTable['Y'] = '35';
   convTable['Z'] = '36';

   var result = '';

   for (var i = 0; i< input.length; i++) {
     val = input.charAt(i);
     if(LETTER_REGEX.test(val)) {
       result += convTable[val]
     } else {
       result += val;
     }
   }

   return result;
}

function calcChecksum(country, normedBlz, normedAcctNo) {
  var result = normedBlz+normedAcctNo+country+'00';
  result = convertLetters(result);
  result = strint.quotientRemainderPositive(result, "97")[1];
  result = 98 - parseInt(result);
  return pad(result,2);
}

function calculateIBAN(blz, acctNo) {
  result = '';
  if (blz && acctNo) {
    //validate BLZ
    if (blz.length < 8 || (!NUMBER_REGEX.test(blz))) {
      result = 'ungültige BLZ';
    }
    //validate AcctNo
    if (acctNo < 1 || (!NUMBER_REGEX.test(acctNo))) {
        if (result.length > 0) {
          result = result + ' und ';
        }
      result = result + 'ungültige Kontonummer';
    }

    if (result.length == 0) {
      country = 'DE';
      normedBlz = blz;
      normedAcctNo = pad(acctNo, 10);
      checksum = calcChecksum(country, normedBlz, normedAcctNo);
      result = country+checksum+normedBlz+normedAcctNo;
    }
  }
  return result;
}

exports.render = function(req, res) {

  blz = req.query.BLZ || '';
  acctNo = req.query.AcctNo || '';
  iban = calculateIBAN(blz, acctNo);

  res.json({
    BLZ : blz,
    AcctNo : acctNo,
    IBAN: iban,
  });
};
