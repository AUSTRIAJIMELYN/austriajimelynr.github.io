document.addEventListener('DOMContentLoaded', (event) => {
    const prices = {
        price1: 10000.00,
        price2: 15000.00,
        price3: 15000.00,
        price4: 10000.00,
        price5: 10000.00,
        price6: 20000.00,
    };

    const qtyInputs = [
        document.getElementById('qty1'),
        document.getElementById('qty2'),
        document.getElementById('qty3'),
        document.getElementById('qty4'),
        document.getElementById('qty5'),
        document.getElementById('qty6'),
    ];

    const totalInput = document.getElementById('total');
    const cashInput = document.getElementById('cash');
    const changeInput = document.getElementById('change');
    const cartsTextarea = document.getElementById('carts');

    function updateCart() {
        let total = 0;
        let cartText = '';

        qtyInputs.forEach((input, index) => {
            const qty = parseInt(input.value) || 0;
            const priceKey = `price${index + 1}`;
            const productPrice = prices[priceKey];
            if (qty > 0) {
                total += qty * productPrice;
                cartText += `Product ${index + 1} - Quantity: ${qty}, Price: ${(qty * productPrice).toFixed(2)}\n`;
            }
        });

        totalInput.value = total.toFixed(2);
        cartsTextarea.value = cartText.trim();
        calculateChange(); // Recalculate change whenever cart is updated
    }

    function calculateChange() {
        const total = parseFloat(totalInput.value) || 0;
        const cash = parseFloat(cashInput.value) || 0;
        const change = cash - total;
        changeInput.value = change.toFixed(2);
    }

    function printReceipt() {
        const receiptWindow = window.open('', '', 'width=600,height=400');
        receiptWindow.document.write('<html><head><title>Receipt</title></head><body>');
        receiptWindow.document.write('<h1>Receipt</h1>');
        receiptWindow.document.write('<pre>' + cartsTextarea.value + '</pre>');
        receiptWindow.document.write('<p>Total: ' + totalInput.value + '</p>');
        receiptWindow.document.write('<p>Cash Tendered: ' + cashInput.value + '</p>');
        receiptWindow.document.write('<p>Change: ' + changeInput.value + '</p>');
        receiptWindow.document.write('</body></html>');
        receiptWindow.document.close();
        receiptWindow.print();
    }

    qtyInputs.forEach(input => {
        input.addEventListener('input', () => {
            updateCart();
            calculateChange(); // Ensure change is calculated after updating cart
        });
    });
    cashInput.addEventListener('input', calculateChange);
    window.printReceipt = printReceipt; // Make the function globally accessible
});
            
