let message;
let cost;
const shipping = prompt ('Выбери страну доставки');


const country = shipping.charAt(0).toUpperCase() + shipping.substr(1).toLowerCase(); 


switch (country) {
  
    case 'Китай':
      cost = 100;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;
  
    case 'Чили':
      cost = 250;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;
  
    case 'Австралия':
      cost = 170;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;

      case 'Индия':
      cost = 80;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;

      case 'Ямайка':
      cost = 120;
      message = `Доставка в ${country} будет стоить ${cost} кредитов`;
      break;
  
    default:
      alert ('В вашей стране доставка не доступна');
  }
  console.log(message);

