let nickname = '';

function saveNickname() {
    nickname = document.getElementById('nickname').value;
    alert('Nickname saved as ' + nickname);
}

function addGroup() {
    const groupName = document.getElementById('group').value;
    const groupDiv = document.createElement('div');
    groupDiv.innerHTML = `<h3>${groupName}</h3>`;
    document.getElementById('groups').appendChild(groupDiv);
}

function postMessage() {
    const message = document.getElementById('message').value;
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `<strong>${nickname}:</strong> ${message}`;
    document.getElementById('posts').appendChild(postDiv);
}
