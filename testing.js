const response = fetch("https://polyratings.dev/")
                            .then(response => response.text())
                            .then(data => console.log(data));
