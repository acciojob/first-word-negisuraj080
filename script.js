function firstWord(s) {
  // your code here
	const trimmedStr = s.trim();

  if (trimmedStr === '' || !trimmedStr.includes(' ')) {
    return trimmedStr;
  }

  const firstSpace = trimmedStr.indexOf(' ');
  return trimmedStr.slice(0, firstSpace);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
