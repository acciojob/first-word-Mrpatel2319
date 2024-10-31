function firstWord(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
    
    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');
    
    // If there's no space, return the entire string; otherwise return the substring up to the first space
    return spaceIndex === -1 ? s : s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
