var lastInputValue = '';

function sendKeyPressData(endpoint) {
    var inputElement = document.getElementById('input');
    var resultElement = document.getElementById('resultContainer');

    if (inputElement) {
        var inputValue = inputElement.value;

        if (inputValue.length > 1) {
            if (inputValue !== lastInputValue){
                fetch('http://localhost:5000/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ text: inputValue }),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Sunucudan gelen yanıt:', data);

                    var serverResponseList = data;


                    console.log(typeof(data))
                    console.log(typeof(data.list))
                    console.log(typeof(serverResponseList))

                    if (resultElement) {
                        resultElement.innerHTML = ''; // Önceki içeriği temizle

                        for (var i = 0; i < serverResponseList.length; i++) {
                            var liElement = document.createElement("li");
                            liElement.classList.add("result-li");
                            liElement.textContent = "Stilize Edilmiş List Item";
                            liElement.textContent = serverResponseList[i];
                            resultElement.appendChild(liElement);
                        }
                    }
                    lastInputValue = inputValue;
                })
                .catch(error => {
                    console.error('Hata:', error);
                });
            }
        } else{
            resultElement.innerHTML = '';  
        }
    } 
}

setInterval(sendKeyPressData, 2000);