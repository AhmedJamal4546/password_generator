document.getElementById('button').onclick = function() {  
    const chars = '0123456789-_azertyuiopmlkjhgfdsqwxcvbnAZERTYUIOPMLKJNHBGVFCDXSWQ';  
    let randomString = '';  
    const length = 11;   

    for (let i = 0; i < length; i++) {  
        const randomIndex = Math.floor(Math.random() * chars.length);  
        randomString += chars[randomIndex];  
    }  

    document.getElementById('text').value = randomString;  
};