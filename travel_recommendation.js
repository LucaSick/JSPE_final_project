function searchInput() {
    let div_to_place = document.getElementById("search_results");
    let place = document.getElementById("search_input").value.toLowerCase();
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const country = data.countries.find(item => item.name.toLowerCase().includes(place));
            if (country) {
                div_to_place.innerHTML = `<ul>`
                for (city of country.cities) {
                    div_to_place.innerHTML += `<li>`
                    div_to_place.innerHTML += `<h3>${city.name}</h3>`
                    div_to_place.innerHTML += `<p>${city.description}</p>`
                    div_to_place.innerHTML += `</li>`
                }
                div_to_place.innerHTML += `</ul>`
                return
            }

            if ('beaches'.includes(place)) {
                div_to_place.innerHTML = `<ul>`
                for (beaches of data.beaches) {
                    div_to_place.innerHTML += `<li>`
                    div_to_place.innerHTML += `<h3>${beaches.name}</h3>`
                    div_to_place.innerHTML += `<p>${beaches.description}</p>`
                    div_to_place.innerHTML += `</li>`
                }
                div_to_place.innerHTML += `</ul>`
                return
            }

            if ('temples'.includes(place)) {
                div_to_place.innerHTML = `<ul>`
                for (temples of data.temples) {
                    div_to_place.innerHTML += `<li>`
                    div_to_place.innerHTML += `<h3>${temples.name}</h3>`
                    div_to_place.innerHTML += `<p>${temples.description}</p>`
                    div_to_place.innerHTML += `</li>`
                }
                div_to_place.innerHTML += `</ul>`
                return
            }
            div_to_place.innerHTML = "No results found"
        }).catch(error => {
            console.error("Error:", error);
            div_to_place.innerHTML = "Error while fetching data";
        })
}

function clearInput() {
    document.getElementById("search_input").value = "";
    document.getElementById("search_results").innerHTML = "";
}