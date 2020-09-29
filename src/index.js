module.exports = function reverse (n) {
    /* 1 способ
        return +((''+Math.abs(n)).split('').reverse().join(''));
    */

    /* 2 Способ */
    
    let res = 0;
    let tmp = Math.abs(n);
    while (tmp){
        res = res * 10 + tmp % 10;
        tmp = Math.floor(tmp / 10);
    }
    return res;
}
