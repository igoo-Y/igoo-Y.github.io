const quotes = [
    {
        quote:"Stay hungry, Stay foolish.", 
        author:"Steve Jobs"
    },
    {
        quote:"Don’t let the noise of others’ opinions drown out your own inner voice.", 
        author:"Steve Jobs"
    },
    {
        quote:"It’s fine to celebrate success, but it is more important to heed the lessons of failure.", 
        author:"Bill Gates"
    },
    {
        quote:"Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", 
        author:"Mark Zuckerberg"
    },
    {
        quote:"Some people don't like change, but you need to embrace change if the alternative is disaster.", 
        author:"Elon Musk"
    },
    {
        quote:"People should pursue what they're passionate about. That will make them happier than pretty much anything else.", 
        author:"Elon Musk"
    },
    {
        quote:"Basically, our goal is to organize the world's information and to make it universally accessible and useful.", 
        author:"Larry Page"
    },

    {
        quote:"Life’s too short to hang out with people who aren’t resourceful.", 
        author:"Jeff Bezos"
    },
    {
        quote:"Let your joy be in your journey - not in some distant goal.", 
        author:"Tim Cook"
    },
    {
        quote:"If you're changing the world, you're working on important things. You're excited to get up in the morning.", 
        author:"Larry Page"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const random = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = random.quote;
author.innerText = random.author;

