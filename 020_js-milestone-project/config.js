function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();

    if (!enteredPlayername) { // enteredPlayername === ''
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!'
        return;
    }
}
// 우선 form을 submit 할 때 HTTP 요청을 서버에 보내려고 하는 브라우저의 기본 동작을 방지해야 한다.
// 새로 알게된 개념 : new 키워드와 FormData 오브젝트, .get('name'), trim()
// input 에 required 를 넣어 내용이 없는 제출을 막아줄수는 있지만 공백이 포함된 내용은 방지하지 못하기에 .trim() 매서드를 통해서 공백을 제거해준다. (문자열 사이 공백은 유지)