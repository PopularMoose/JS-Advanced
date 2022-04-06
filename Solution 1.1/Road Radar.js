function solve(speedOfDriver , area){

  let a = Number(speedOfDriver);
  let b = String(area);
  let currentSpeed = 0;
  let sum = 0;
  let status = '';
  if (area == 'city' ) {
      currentSpeed = 50;
  }
  else if (area == 'motorway') {
      currentSpeed = 130;
  }
  else if (area == 'interstate') {
    currentSpeed = 90;
  }
  else if (area == 'residential') {
    currentSpeed = 20;
  }
      if (currentSpeed > a) {
          console.log(`Driving ${a} km/h in a ${currentSpeed} zone`);
      }
      else
      {
          sum = a - currentSpeed
          if (sum <= 20 ) {
              status = 'speeding';
          }
          else if (sum > 20 && sum <= 40) {
              status = 'excessive speeding';
          }
          else
              status = 'reckless driving';
          }
          
        console.log(`The speed is ${sum} km/h faster than the allowed speed of ${currentSpeed} - ${status}`);
      }
      
  
   

solve(200, 'motorway');