// Warm up задача: креирајте функција која се вика exclaim. Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!
// Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
// Title -> име на книгата //string
// Author -> име на авторот //string
// Price -> цена на книгата //number
// Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks
// Креирајте функција која се вика CountMs која има еден параметар кој е стринг. Функцијата враќа број, кој кажува колку пати буквата "M" се повторува во тој стринг.
// повикувањето би изгледало вака: CountMs("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM");
// Креирајте функција која се вика CountCharacters, која е слична на CountMs. Овој пат, ќе додадете уште еден еден параметар кој ќе каже која буква да ја провери колку пати се повторува во стрингот. (hint за оваа и за третата задача, ако може со length да се провери големината на низата, може и големината на стрингот. Уште еден hint: for loop)
// повикувањето би изгледало вака: CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W");
//   5.  Креирајте функција која се вика LargestNumber. Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.

// ___________________________________________________ //

let text = "Javascript"
let exclaimSign = "!"

function exclaim(text) {
    
    console.log(text+exclaimSign)
}
exclaim(text)


// ___________________________________________________ //

let books = [
    {
        Title: "Gol Covek",
        Author: "Igor Dzambazov",
        Price: 290
    },
    {
        Title: "Oblecen Covek",
        Author: "Igor Dzambazov",
        Price: 990
    },
    {
        Title: "Priracnik za antialkoholiraci",
        Author: "Igor Dzambazov",
        Price: 1190
    },
    {
        Title: "Prikazni od Mjaukedonija",
        Author: "Igor Dzambazov ",
        Price: 2190
    },
    {
        Title: "Umren covek",
        Author: "Igor Dzambazov",
        Price: 890
    }

];

let PriceFilter = books.filter(book =>{
    return book.Price <= 400;
});

console.log(PriceFilter);

// ___________________________________________________ //

let input = "JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM"
 let LetterCounter=0
 let CharFilter="M"

 function CountMs(input,CharFilter) {
    let arr =input.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===CharFilter) {
            LetterCounter++
        }
        
    }
    console.log(LetterCounter)
 }
CountMs(input,CharFilter)

// ___________________________________________________ //

const array = [-1, 0, 3, 100, 99, 2, 99]
function LargestNumber(array) {
    let max = array.reduce((a, b) => Math.max(a, b), -Infinity);
    console.log(max)
     
 }
  LargestNumber(array)