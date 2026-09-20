function hitung(operator) {
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    const outputField = document.getElementById('output');

    if (isNaN(bil1) || isNaN(bil2)) {
        outputField.value = "Input tidak valid";
        return;
    }

    let hasil = 0;

    switch (operator) {
        case '+': hasil = bil1 + bil2; break;
        case '-': hasil = bil1 - bil2; break;
        case '*': hasil = bil1 * bil2; break;
        case '/': 
            if (bil2 === 0) {
                outputField.value = "Tidak bisa dibagi 0";
                return;
            }
            hasil = bil1 / bil2; 
            break;
    }

    outputField.value = hasil;
}