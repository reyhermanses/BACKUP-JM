
let input = "Budi pergi ke pasar" //inputan string
const vokalAlpabhet = "AIUEOaiueo" //buat required untuk huruf vokal
const consonantAlpabhet = "BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz" //buat required untuk huruf konsonan
let mapsConsonant = []
let mapVocal = []
let tempVocal=[]
let tempConsonant = []

for (let mapping = 0; mapping < consonantAlpabhet.length; mapping++) {
    mapsConsonant.push(consonantAlpabhet[mapping]) //convert string ke array terlebih dahulu
}

for (let mapping = 0; mapping < vokalAlpabhet.length; mapping++) {
    mapVocal.push(vokalAlpabhet[mapping]) //convert string ke array terlebih dahulu
}

for (let i = 0; i < input.length; i++) {
    mapsConsonant.find( // cek inputan jika terdapat dalam array consonant requires
        function (value) {
            if (input[i] === value) {
                tempConsonant.push(input[i]) // jika ada maka inputan consonant tersebut di masukkan ke dalam tampungan array yang baru
            }
        }
    )
     mapVocal.find(// cek inputan jika terdapat dalam array vocal requires
        function (value) {
            if (input[i] === value) {
                tempVocal.push((input[i]))// jika ada maka inputan vocal tersebut di masukkan ke dalam tampungan array yang baru
            }
        }
    )

}

console.log("here's vocal letter :")
/****
 * Menampilkan deretan huruf vokal dari tampungan array tempvocal
 * mengkonversi array tempVcal ke bentuk string
 * dan menghilangkan koma setelah string terbentuk
 */
console.log(tempVocal.toString().replaceAll(",", " "))
console.log("here's consonant letter :")
console.log(tempConsonant.toString().replaceAll(",", " "))