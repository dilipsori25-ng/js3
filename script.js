const quote=["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.-","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. -Albert Einstein","Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. -Bernard M. Baruch","You know you're in love when you can't fall asleep because reality is finally better than your dreams.-Dr. Seuss","Be the change that you wish to see in the world. -Mahatma Gandhi"];

function GetQuote() {
    const rendamIndex=parseInt(Math.random()*quote.length);
    document.querySelector('.quote-box').innerHTML=`
    <span>&#8220;</span>
          ${quote[rendamIndex].split("-")[0]}
    <span>&rdquo;</span> `;

    document.querySelector('.author').innerHTML=`
      <span>&#8220;</span>
          ${quote[rendamIndex].split("-")[1]}
    <span>&rdquo;</span> `; 
}

function copyQuote(){
    const quotes=document.getElementById('quot').textContent;
    navigator.clipboard.writeText('quot');
}