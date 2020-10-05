//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap

$(document).ready(function() {
    $("input[type='radio']").click(function() {
        var radioValue = $("input[name='groupOfDefaultRadios']:checked").val();
        if (radioValue) {
            clearTable();
            $("#carouselExampleIndicators").carousel("next");
            document.getElementById("linguagem_selecionada").innerHTML = radioValue.charAt(0).toUpperCase() + radioValue.slice(1);
            url = 'https://api.github.com/search/repositories?'
            q = 'code'
            language = radioValue;
            order = 'desc'
            sort = 'stars'
            per_page = '5'
            var request = new XMLHttpRequest()

            request.open('GET', url + 'sort=' + sort + '&order=' + order + '&q=' + q + '+language:' + language + '&per_page=' + per_page, true)
            request.onload = function() {
                // Begin accessing JSON data here
                var data = JSON.parse(this.response)
                if (request.status >= 200 && request.status < 400) {
                    clearTable();
                    for (let i = 0; i < Object.keys(data['items']).length; i++) {
                        mydata(data['items'][i])
                    }
                } else {
                    console.log('error')
                }
            }
            request.send()
        }
    });
});