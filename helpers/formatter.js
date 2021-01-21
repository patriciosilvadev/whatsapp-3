const phoneNumberFormatter = function(number){
    // 1. Menghilangkan karakter selain angka
    let formatted = number.replace(/\D/g, '');
    
    // 2. Menghilangkan anga 0 didepan (prefix)
    //    Kemudian diganti dengan 62
    if (formatted.startsWith('0')) {
        formatted = '62' + formatted.substr(1);
    }

    //3. Menambahkan @c.us di ahir
    if (!formatted.endsWith('@c.us')) {
        formatted += '@c.us';
    }

    return formatted;
}

module.exports = {
    phoneNumberFormatter
}