const priceItem1 = 15.678;
const priceItem2 = 123.965;
const priceItem3 = 90.2345;
const clientPaid = 500;

const maximumItemPrice = Math.max(priceItem1, priceItem2, priceItem3);
console.log(`Максимальна ціна товару`, maximumItemPrice);

const minimumItemPrice = Math.min(priceItem1, priceItem2, priceItem3);
console.log(`Мінімальна ціна товару`, minimumItemPrice);

const totalPrice = priceItem1 + priceItem2 + priceItem3;
console.log(`Загальна вартість товарів`, totalPrice);

const totalPriceRounded = Math.floor(priceItem1) + Math.floor(priceItem2) + Math.floor(priceItem3);
console.log(`Заокруглена вартість товарів`, totalPriceRounded);

const totalPriceRoundedToHundreds = (Math.round(totalPriceRounded/100)) * 100;
console.log(`Заокруглена до сотень вартість товарів`, totalPriceRoundedToHundreds);

const isEven = totalPriceRounded % 2 === 0;
console.log(`Заокруглена вартість товарів є парним числом - `, isEven);

const changeAfterPayment = clientPaid - totalPrice;
console.log(`Решта при оплаті всіх товарів`, changeAfterPayment);

const averagePrice = (Math.ceil((totalPrice/3) * 100)) / 100;
console.log(`Середнє значення цін`, averagePrice);

const discount = Math.random();
const totalPriceWithDiscount = (Math.ceil((totalPrice * (1 - discount)) * 100)) / 100;
console.log(`Сума до сплати з врахуванням знижки`, totalPriceWithDiscount);


const netProfit = totalPriceWithDiscount - (totalPrice/2);
console.log(`Чистий прибуток з врахуванням знижки`, netProfit.toFixed(2));

//advanced
document.writeln(`<div  style="color:green;"> Максимальна ціна товару ${maximumItemPrice}, <br>
Мінімальна ціна товару ${minimumItemPrice}, <br>
Загальна вартість товарів ${totalPrice}, <br>
Заокруглена вартість товарів ${totalPriceRounded}, <br>
Заокруглена до сотень вартість товарів ${totalPriceRoundedToHundreds}, <br>
Заокруглена вартість товарів є парним числом - ${isEven}, <br>
Решта при оплаті всіх товарів ${changeAfterPayment}, <br>
Середнє значення цін ${averagePrice}, <br>
Сума до сплати з врахуванням знижки ${totalPriceWithDiscount}, <br>
Чистий прибуток з врахуванням знижки  ${netProfit.toFixed(2)}.<br> </div>`);

