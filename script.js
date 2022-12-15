let apiQuotes = [];
// Get Quotes from API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch(error){
    // catch error
    alert(error);
    }
}

// onLoad

getQuotes();