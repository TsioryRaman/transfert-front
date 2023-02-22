export const startsWithVowel = (word:string) => {
    var vowels = ("aeiouAEIOU"); 
    return vowels.indexOf(word[0]) !== -1;
 }