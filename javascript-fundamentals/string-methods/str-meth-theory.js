
/* string methods are used to manipulate strings withot changing the orginal strings.

they are used to:

A.extract part of strings(substring)

1.slice() : returns part of srting (start, end) but can accept negative(-) parameters
2.subString() : returns part of string (start, end) but can't accept negative(-) parameters
3.subStr() : returns part of string (start, length) , first is the starting location and the second is length

B.search for subStrings

4. search() : Finds the first substring match in a regular expression search and return its index.
5. indexOf() : Returns the position of the first occurrence of a substring, or -1 if it is not present.
6. LastIndexOf() : Returns the last occurrence of a substring in the string, or -1 if it is not present.
7. includes : Returns true if searchString appears as a substring of the result of converting this object
to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.



C.transform strings

8. toUpperCase() : String.toUpperCase() ~ Converts all the alphabetic characters in a string to uppercase.
9. toLowerCase() :  String.toLowerCase() ~ Converts all the alphabetic characters in a string to lowercase.
10. replace() : Replaces text in a string, using a regular expression or search string. ~ String.replace('string','new string')
11. toString() :let course = 12; let part = course.toString(); console.log(typeof(part));
12. trim() : Removes the leading and trailing white space and line terminator characters from a string.
13. trimEnd() : Removes the trailing white space and line terminator characters from a string.
14. trimStart() : Removes the leading white space and line terminator characters from a string.

D.extract some characters

15. CharAt() : Returns the character at the specified index.
16. CharCodeAt() : Returns the Unicode value of the character at the specified location.

// slice

var text = 'programming';

let slice1 = text.slice(0,5);// progr
let slice2 = text.slice(2,5)// ogr
let slice3 = text.slice(0,-5)// progra


console.log(slice1);
console.log(slice2);
console.log(slice3);

// substring

let substring1 = text.substring(0,5);
let substring2 = text.substring(2,5);
let substring3 = text.substring(5,2);


console.log(substring1);
console.log(substring2);
console.log(substring3);

*/
