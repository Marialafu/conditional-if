// 1️⃣ Camila quiere montar en una atracción y no sabe si la dejarán subir, la altura mínima para subir son 150cm. Haz una función que reciba la altura en cm y determine si Camila puede montar o no.

const knowIfYouCanRideTheAtracction = (personHigh) =>{
    const minimumHigh = 150
    if (personHigh < minimumHigh) {
        return 'Lo siento, no tienes altura suficiente para subir a la atracción.'}
        else{
        return 'Adelante, puedes subir a la atracción.'
    }
}
console.log (knowIfYouCanRideTheAtracction (120));
console.log (knowIfYouCanRideTheAtracction (160));

//2️⃣ Bego está intentando conseguir envío gratuito en su pedido online. Crea una función que reciba como parámetro el total de su compra y determine si supera los 50€ para obtener el envío gratis o si tendrá que pagarlo.

const knowIfShippingCost = (buy) => {
    const freeShipping = 50
    if (buy < freeShipping) {
        return 'Alcanza 50 euros de compra para conseguir el envío gratuito.'
    } else{
        return 'Has superado los 50 euros de compra, disfruta de tu envío gratuito.'
    }
}
console.log(knowIfShippingCost (45));
console.log(knowIfShippingCost (51));

//3️⃣ Sabrina quiere saber si un número es múltiplo de 7. Crea una función que reciba un número y determine si es múltiplo o no.

const knowIfNumberIsMultiple = (number) => {
    const multiple = number % 7
    if ( multiple === 0) {
        return ' es múltiplo de 7'
    } else {
        return ' no es múltiplo de 7'
    }
}
console.log(knowIfNumberIsMultiple (21));
console.log(knowIfNumberIsMultiple (4));

//4️⃣ Abby está evaluando candidatos para su equipo. Los candidatos harán tres pruebas y cada una se evalúa de 0 a 10. Si la media está entre 0 y 4 mostrará el mensaje "Estás Fuera", si la media está entre 5 y 7 mostrará "Entras en la reserva" y si la media es 8 o más dirá "Salimos al amanecer".

const knowIfCandidateIsValide = (firstTest, secondTest, thirdTest) => {
    const testResult = (firstTest + secondTest + thirdTest) / 3
    if (testResult <= 4.9){
        return 'Estás fuera'
    } else if (testResult >= 5 && testResult <= 7.9) {
        return 'Entras en la reserva'
    } else if(testResult >= 8) {
        return 'Salimos al amanecer'
    }
}
console.log(knowIfCandidateIsValide (3, 6, 4));


//5️⃣ Macarena tiene tres perros de distintas razas y quiere saber cuál de ellos es el más grande. Crea una función que reciba el peso de los tres perros y determine cuál es el más pesado.

const knowWichDogIsBigger = (bulldog, labrador, caniche) => {
    if (bulldog > labrador && bulldog > caniche){
        return 'El bulldog es el más pesado'

    } else if (labrador > bulldog && labrador > caniche) {
        return 'El labrador es el más pesado'
    } 
    else if (caniche > bulldog && caniche > labrador) {
        return 'El caniche es el más pesado'
    }
}
console.log(knowWichDogIsBigger(7, 9, 8));
console.log(knowWichDogIsBigger(3, 4, 5));

//6️⃣ Camila está organizando un sorteo y cada participante tiene un número. Si el número es divisible por 3, gana un descuento. Si es divisible por 5, recibe un regalo. Si es divisible por ambos, obtiene el premio mayor. Si no es divisible por ninguno, no gana nada. Crea una función que reciba un número entero y determine qué premio le corresponde.

const knowWichPresentYouWon = (number) => {
    if (number % 3 === 0 && number % 5 !== 0){
        return 'Has ganado un descuento'
    } else if (number % 5 === 0 && number % 3 !== 0){
        return 'Has ganado un regalo'
    } else if (number % 5 === 0 && number % 3 === 0){
        return 'Has ganado el premio mayor'
    } else { return 'No has ganado nada'}
}
console.log(knowWichPresentYouWon(4));

//7️⃣ Bego está repartiendo golosinas entre sus amigos. Si la cantidad de golosinas es un número par, podrá dividirlas equitativamente. Si es impar, sobrará una y alguien tendrá que decidir qué hacer con ella. Crea una función que reciba un número entero y determine si es par o impar, mostrando el mensaje correspondiente.

const knowHowMuchCandyBegoGives = (candy) => {
    if (candy % 2 === 0){
        return 'Se reparte equitativamente'
    } else { return 'El que parte y reparte se lleva la mejor parte'}
}
console.log(knowHowMuchCandyBegoGives(10));
console.log(knowHowMuchCandyBegoGives(5));

//## A sufrir

//8️⃣ Sabrina está planificando un viaje muy especial para celebrar el año nuevo y quiere saber si el año en el que piensa viajar es bisiesto, ya que eso afectará la fecha del viaje. Crea una función que reciba un año como parámetro y determine, siguiendo la regla de que un año es bisiesto si es divisible por 4, pero no por 100, a menos que también sea divisible por 400, si es bisiesto ("Es un año bisiesto") o si no lo es ("No es un año bisiesto").

const knowLeapYear = (year) => {
    if (year % 4 === 0) {
        return 'Es bisiesto'
    } else if (year % 100 !== 0 || year % 400 !== 0){
        return 'No es bisiesto'
    }
}
console.log(knowLeapYear(2032));
console.log(knowLeapYear(2025));

//9️⃣ Abby está hackeando un sistema de seguridad en una misión secreta. Para acceder, debe introducir un código numérico. La puerta solo se abrirá si el número es par y mayor que 50, o si es impar pero un múltiplo de 7. Crea una función que reciba un número y determine si Abby podrá entrar ("Acceso concedido") o si la puerta seguirá bloqueada ("Acceso denegado").

const AbbyCodeRight = (code) => {
    if ((code % 2 === 0 && code > 50) || (code % 2 !== 0 && code%7 === 0)){
        return 'Acceso concedido'
    } else {return 'Acceso denegado'}
}
console.log(AbbyCodeRight(52));
console.log(AbbyCodeRight(3));

//🔟 Macarena está evaluando la salud de sus perros según su peso y edad. Un perro se considera en peso saludable sólo si pesa entre 8 y 30 kg. Además solo se considerará saludable si su edad es un número múltiplo de 3 y menor de 15. Crea una función que reciba el peso del perro y su edad. Determina si está saludable ("El perro está saludable") o si no ("Perro pocho 😢")

const knowDogHealth = (dogWeight, dogAge) => {
    if ((dogWeight >= 8 && dogWeight <= 30) && (dogAge % 3 === 0 && dogAge <= 15)){
        return 'El perro está saludable'
    } else {'911, perro pocho'}
}
console.log(knowDogHealth(10, 9));
console.log(knowDogHealth(50, 9));