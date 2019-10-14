(function (window, document, undefined){
    const search = document.getElementById('search');
    const matchList = document.getElementById('match-list');
    let search_filter = document.getElementById('search_filter');
    const post_button = document.getElementById('post_button');
    const search_heading = document.getElementById("search_heading");
    let search_filter_value = search_filter.value

    let suggestions;

    const changeSearchHeading = (text) => {
        search_heading.textContent = text
    }


    const grayoutButton = (true_or_false) => {
        post_button.disabled = true_or_false
    }

    grayoutButton(true)

    search_filter.addEventListener('change', () => {
        if(search_filter.value == 'None'){
            grayoutButton(true)
        }
        else
        {
            grayoutButton(false)
            changeSearchHeading(`Search ${search_filter.value}s`)
        }
    })

    // Get suggestions
    const getSuggestions = async () => {
    const res = await fetch('/rest/picture/');
    suggestions = await res.json();
    // console.log(suggestions);
    
    };

    // FIlter suggestions
    const searchSuggestions = searchText => {
    // Get matches to current text input
    let matches = suggestions.filter(suggestion => {
    const regex = new RegExp(`^${searchText}`, 'gi');    
    // return suggestion.user.match(regex);
    if(search_filter.value == 'title'){
        return suggestion.title.match(regex)
    }else{
        return suggestion.user.match(regex)
    }
    });

    
    // Clear when input or matches are empty
    if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
    }

    outputHtml(matches);
    };

    // Show results in HTML
    const outputHtml = matches => {
    if (matches.length > 0) {
        console.log(search_filter_value);
        
    const html = matches
    .map(
        match => `<div class="card card-body mb-1">
        <h4>${match.search_filter_value}</h4>
    </div>`
    )
    .join('');
    matchList.innerHTML = html;
    matchList.addEventListener('click', e => search.value = e.target.textContent.trim())
    }
    };

    window.addEventListener('DOMContentLoaded', getSuggestions);
    search.addEventListener('input', () => searchSuggestions(search.value));
})(window, document)