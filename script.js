function firstWord(s) {
  // your code here
	const trimmedS = s.trim();
	
	if (s.trim() === '' || !s.includes(' ')) {
    return s;
  }
	const firstSpace = s.indexOf(' ');
  return s.slice(1,firstSpace);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
