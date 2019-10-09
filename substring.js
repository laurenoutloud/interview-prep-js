//Suppose you have an array of strings 'src' and a string 'key':

//Now return all the strings from the 'src' array that contains the key as substring in them. For example, for above case, the solution should be:

function containsSubstring() {
  let src = [
    "minecraftgame",
    "intelligent",
    "innercrafttalent",
    "knife",
    "scissor",
    "stonecrafter"
  ];
  let key = "craft";
  let result = [];

  for (let i = 0; i < src.length; i++) {
    if (src[i].includes(key)) {
      result.push(src[i]);
    }
  }
  return result;
}

console.log(containsSubstring());