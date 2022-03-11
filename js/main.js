const theQuotes = [
    { 
        quote: 'Java is to JavaScript, like Boter is to Boterham',
        from: 'M Auerbach, &copy; 2021'
    },
    { 
        quote: 'If life were predictable it would cease to be life, and be without flavor.',
        from: 'Eleonor Roosevelt'
    },
    { 
        quote: 'Life is what happens when you\'re busy making other plans',
        from: 'John Lennon'
    },
    { 
        quote: 'If life gives you lemons, make lemonade',
        from: 'Dunno - sometime...'
    },
];

const button = document.querySelector(".generate");
const quote = document.querySelector(".quote");
const from = document.querySelector(".from")
button.addEventListener("click", myFunction);

function myFunction(){
    const number= Math.floor(Math.random ()* theQuotes.length );  
    quote.innerHTML = theQuotes[number].quote ; 
    from.innerHTML = theQuotes[number].from;
}




