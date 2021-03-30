function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) {return 'This one is on me!';}
  if (feet > 2500) return 'No can do.';
  if (feet > 2000) {return 'I will gladly take your thirty bucks.';}
}

function ternaryCheckCity(city){
  // Write your code here!
  const msg = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return msg;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}