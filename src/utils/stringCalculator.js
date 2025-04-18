export const add = (numbers) => {
    //first for numbr check
    if (!numbers) return 0;
  
    // Handling for delimiter
    let delimiter = ',';
    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEnd);
      numbers = numbers.substring(delimiterEnd + 1);
    }
  
    // Split by both comma and newline
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));
    
    // Check for negative numbers
    const negatives = numberArray.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }
  
    // Calculate sum
    return numberArray.reduce((sum, num) => {
      const parsedNum = parseInt(num, 10) || 0;
      return sum + parsedNum;
    }, 0);
  }; 