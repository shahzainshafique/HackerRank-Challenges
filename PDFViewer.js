/**When a contiguous block of text is selected in a PDF viewer, the selection is highlighted with a blue rectangle. In this PDF viewer, each word is highlighted independently. For example:
There is a list of  character heights aligned by index to their letters. For example, 'a' is at index  and 'z' is at index . There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in  assuming all letters are  wide. */

function designerPdfViewer(h, word) {
    var letters = [];
    // Write your code here
    var str = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25 };

    console.log(word);
    for(let i = 0; i<word.length;i++){
        console.log(h[str[word[i]]]);
        letters.push(h[str[word[i]]]);
    }
var tallest = Math.max(...letters);
return tallest * word.length;
}