const isOpen = (bracket, bracketsConfig) => {
  for (let j = 0; j < bracketsConfig.length; j++) {

      if (bracket == bracketsConfig[j][0]) {
        return j;
      }
    }
    return null; 
}

const isClose = (bracket, bracketsConfig) => {
  for (let j = 0; j < bracketsConfig.length; j++) {

      if (bracket == bracketsConfig[j][1]) {
        return j;
      }
    }
    return null;
}

module.exports = function check(str, bracketsConfig) {
  let arrStak = [];

    for (let i = 0; i < str.length; i++) { 
      let resultOpen = isOpen(str[i], bracketsConfig);
      let resultClose = isClose(str[i], bracketsConfig);
      
      if (resultOpen == resultClose)
      {
      	let top = arrStak[arrStak.length - 1];
        if (top == resultClose)
        {
        	arrStak.pop();
        }
        else {
        	arrStak.push(resultOpen);
        }
        
        continue;
      } 
      
      if (resultOpen !== null) {
          arrStak.push(resultOpen);
          continue;
      }

      

      if (resultClose !== null ) {
      	let resultPop = arrStak.pop();
      	if (resultPop !== resultClose) {
              return false;
        }
      }
    }
    
    if (arrStak.length == 0) {
    	return true
    } else {
    	return false
  }
}
