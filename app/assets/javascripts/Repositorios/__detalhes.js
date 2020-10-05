function myDetails(data) {
    $("#carouselExampleIndicators").carousel("next");
    url = 'https://api.github.com/users/'
    user = data['owner']['login']

    var request = new XMLHttpRequest()

    request.open('GET', url + user, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data_user = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            myinfo(data_user);
        } else {
            console.log('error')
        }
    }
    request.send()
}

function myinfo(data_user) {
    document.getElementById("avatar").src = data_user['avatar_url'];
    document.getElementById("name").innerHTML = data_user['name']
    document.getElementById("user_link").innerHTML = data_user['html_url']
    document.getElementById("bio").innerHTML = data_user['bio']
    document.getElementById("followers").innerHTML = data_user['followers']
    document.getElementById("repositorios").innerHTML = data_user['public_repos']
    document.getElementById("following").innerHTML = data_user['following']

}

function goBack() {
    $("#carouselExampleIndicators").carousel("prev");
}