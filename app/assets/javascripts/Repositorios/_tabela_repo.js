//= require jquery3


function mydata(data) {
    var tbody = document.getElementById('mytable');
    const tr = document.createElement("tr");
    tr.className = "myCustomtable"

    for (let index = 0; index < 1; index++) {
        const td = document.createElement("td");
        const td_save = document.createElement("td");
        const td_image = document.createElement("td");
        const td_name = document.createElement("td");
        const td_description = document.createElement("td");
        const btn = document.createElement("BUTTON");
        const btn_save = document.createElement("BUTTON");
        const img = document.createElement("img");

        btn.innerHTML = "Detalhes";
        btn_save.innerHTML = "Salvar";
        btn.className = "btn btn-light";
        btn_save.className = "btn btn-link";
        img.src = data['owner']['avatar_url'];

        td_name.textContent = data['name']
        td_description.textContent = data['description']

        btn.onclick = function() {
            myDetails(data);
        };
        btn_save.onclick = function() {
            mysavedRepo(data);
        };

        tr.appendChild(td_image);
        tr.appendChild(td_name);
        tr.appendChild(td_description);
        td.appendChild(btn);
        td_save.appendChild(btn_save);
        td_image.appendChild(img);
        tr.appendChild(td);
        tr.appendChild(td_save);
    }
    tbody.appendChild(tr);
}

function clearTable() {
    $("#mytable tr").remove();
}