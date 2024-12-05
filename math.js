function math(nums) {
    if (nums.length < 3) {
        throw new Error("Array harus memiliki setidaknya 3 angka");
    }

    // Urutkan array
    nums.sort((a, b) => a - b);

    // Pilih dua kemungkinan:
    // 1. Tiga angka terbesar di akhir array
    // 2. Dua angka terkecil (negatif terbesar) dan angka terbesar
    const n = nums.length;
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const option2 = nums[0] * nums[1] * nums[n - 1];

    // Kembalikan nilai maksimum
    return Math.max(option1, option2);
}

// Contoh penggunaan
const array = [1, 10, 2, 6, 5, 3];
const result = math(array);
console.log("Highest Product:", result);
