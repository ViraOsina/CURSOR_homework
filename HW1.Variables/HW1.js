const PRICE_ITEM1 = 15.678;
const PRICE_ITEM2 = 123.965;
const PRICE_ITEM3 = 90.2345;

let maximumItemPrice = Math.max(PRICE_ITEM1, PRICE_ITEM2, PRICE_ITEM3);
document.writeln(`<p> Максимальна ціна товару ${maximumItemPrice}</p>`);

let minimumItemPrice = Math.min(PRICE_ITEM1, PRICE_ITEM2, PRICE_ITEM3);
document.writeln(`<p> Мінімальна ціна товару ${minimumItemPrice} </p>`);

let totalPrice = PRICE_ITEM1 + PRICE_ITEM2 + PRICE_ITEM3;
document.writeln(`<p> Загальна вартість товарів ${totalPrice} </p>`);

let totalPriceRounded = Math.floor(PRICE_ITEM1) + Math.floor(PRICE_ITEM2) + Math.floor(PRICE_ITEM3);
document.writeln(`<p> Заокруглена вартість товарів ${totalPriceRounded} </p>`);

let totalPriceRoundedToHundreds = (Math.round(totalPriceRounded/100)) * 100;
document.writeln(`<p> Заокруглена до сотень вартість товарів ${totalPriceRoundedToHundreds} </p>`);

let totalPriceRoundedEven = totalPriceRounded % 2;
document.writeln(`<p> Заокруглена вартість товарів є парним числом - ${totalPriceRoundedEven === 0} </p>
                <p> Заокруглена вартість товарів є непарним числом - ${totalPriceRoundedEven === 1} </p>`);


let changeAfterPayment = 500 - totalPrice;
document.writeln(`<p> Решта при оплаті всіх товарів ${changeAfterPayment} </p>`);

let averagePrice = (Math.ceil((totalPrice/3) * 100)) / 100;
document.writeln(`<p> Середнє значення цін ${averagePrice} </p>`);

let discount = Math.random();
let totalPriceWithDiscount = (Math.ceil((totalPrice * (1 - discount)) * 100)) / 100;
document.writeln(`<p> Сума до сплати з врахуванням знижки ${totalPriceWithDiscount} </p>`);
console.log (discount);

let netProfitWithDiscountAndReducedPrice = totalPriceWithDiscount - (totalPrice/2);
document.writeln(`<p> Чистий прибуток з врахуванням знижки та вдвічі меншої собівартості товарів ${netProfitWithDiscountAndReducedPrice.toFixed(2)} </p>`);

//advanced
document.writeln(`<p  style="color:green;"> Максимальна ціна товару ${maximumItemPrice}, </p>
<p  style="color:green;"> Мінімальна ціна товару ${minimumItemPrice}, </p>
<p  style="color:green;"> Загальна вартість товарів ${totalPrice}, </p>
<p  style="color:green;"> Заокруглена вартість товарів ${totalPriceRounded}, </p>
<p  style="color:green;"> Заокруглена до сотень вартість товарів ${totalPriceRoundedToHundreds}, </p>
<p  style="color:green;"> Заокруглена вартість товарів є парним числом - ${totalPriceRoundedEven === 0}, </p>
<p  style="color:green;"> Решта при оплаті всіх товарів ${changeAfterPayment}, </p>
<p  style="color:green;"> Середнє значення цін ${averagePrice}, </p>
<p  style="color:green;"> Сума до сплати з врахуванням знижки ${totalPriceWithDiscount}, </p>
<p  style="color:green;"> Чистий прибуток з врахуванням знижки та вдвічі меншої собівартості товарів ${netProfitWithDiscountAndReducedPrice.toFixed(2)}.</p>`);

