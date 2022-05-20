
function createElement(data) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = data;
    document.body.appendChild(paragraph);
}


function queryWikipedia(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                callback(JSON.parse(req.responseText));
            } else {
                const error = new Error('Error');
                return callback(error, null);
            }
        }
    }
    req.send();
}

queryWikipedia(createElement);