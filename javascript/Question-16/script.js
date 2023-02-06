// 16.. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer


let enteredMonth = prompt('enter a month');

switch(enteredMonth) {
    case 'september':
    case 'october':
    case 'november':
    alert('the season is Autumn');
    break;

    case 'december':
    case 'january':
    case 'febraury':
    alert('the season is Winter');
    break;

    case 'March':
    case 'April':
    case 'May':
    alert('the season is Spring');
    break;

    case 'june':
    case 'July':
    case 'August':
    alert('the season is Summer');
    break;

    default:
    alert('please check again');
        
}