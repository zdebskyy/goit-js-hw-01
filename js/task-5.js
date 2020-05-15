let message;
let cost;
const shipping = prompt ('Выбери страну доставки');


const country = shipping; 



switch (country) {
  
    case 'Китай':
      cost = 100;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;
  
    case 'Чили':
      cost = 250;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;
  
    case 'Австралия':
      cost = 170;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

      case 'Индия':
      cost = 80;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

      case 'Ямайка':
      cost = 120;
      console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

      case null:
        message = 'Canceled';
        console.log(message);
        break;
  
    default:
      alert ('В вашей стране доставка не доступна');
  }



// const name = 'alex';

// const userInput = prompt ('my name?');

// console.log(userInput)

// const nomalizedInput = userInput.toLowerCase();

// console.log(name === nomalizedInput);