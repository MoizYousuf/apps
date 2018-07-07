
    // get element div
    let div = document.getElementById("div");

function bookmarker() {

    // input
    let name = document.getElementById('name basic-url').value;
    let url = document.getElementById('url basic-url').value;



    // createElement

    let h4 = document.createElement('h4');
    let btn = document.createElement('a');
    let btn1 = document.createElement('button');

    // createTextNode

    let h4value = document.createTextNode(name);
    let btnval = document.createTextNode('Visit');
    let btn1val = document.createTextNode('Delete')


    // class set

    btn.className = "sad btn btn-primary";
    btn1.className = "bad btn btn-danger";

    // appendChild

    btn.setAttribute('href', url);
    btn.setAttribute('target', "_blank");
    h4.appendChild(h4value);
    btn.appendChild(btnval);
    btn1.appendChild(btn1val);
    h4.appendChild(btn);
    h4.appendChild(btn1)

    //  put h4

    if (name === '' && url === '') {

        alert('please write')

    }
    else {

        div.appendChild(h4);

    }

    // local storage

    // let bookmark = {
    //     name: name,
    //     url: url
    // }

    // if (localStorage.getItem('bookmarks') === null) {

    //     let bookmarks = [];

    //     bookmarks.push(bookmark);

    //     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // }
    // else {
    //     let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //     bookmarks.push(bookmark);

    //     localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    // }

    //delete


    document.getElementById("name basic-url").value = "";
    document.getElementById("url basic-url").value = "";

}
div.addEventListener('click', Delete);

function Delete(e){

    if(e.target.classList.contains('bad')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            div.removeChild(li);

        }
    }

}