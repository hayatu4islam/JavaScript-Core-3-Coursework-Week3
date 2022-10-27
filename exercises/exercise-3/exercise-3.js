let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
function printReceipt(order){
  let total = 0;
  console.log(`QTY \tITEM \t\t\t TOTAL`);
  order.forEach(item => {
    let sum = item.quantity * item.unitPrice;
    total += sum;
    console.log(`${item.quantity} \t ${item.itemName} \t\t\t ${sum.toFixed(2)}`);
  })
  
  console.log(`\nTotal: ${total}`);
}
printReceipt(order);