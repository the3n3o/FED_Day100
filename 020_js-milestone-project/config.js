function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
// 만약 버튼의 data-playerid="1" 이라면 dataset.playerid; 이겠지만 
// data-player-id="1" 이라면 dataset['player-id']; 방식으로 액세스 해야함.
// data- 에 저장된 값은 string 이므로 +로 숫자로 변환

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.reset(); // form의 cancel 버튼 타입을 reset으로 해주었지만 백드롭 클릭으로 오버레이를 off 시킬땐 폼 데이터가 잔류하기 때문에 해당 코드로 문제 해결
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

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer - 1].name = enteredPlayername;
    /* 
    위 내용은 아래와 같다
    if (editedPlayer === 1) {
        players[0].name = enteredPlayername;
    } else {
        players[1].name = enteredPlayername;
    } 
    */
   closePlayerConfig();
}
// 우선 form을 submit 할 때 HTTP 요청을 서버에 보내려고 하는 브라우저의 기본 동작을 방지해야 한다.
// 새로 알게된 개념 : new 키워드와 FormData 오브젝트, .get('name'), trim()
// input 에 required 를 넣어 내용이 없는 제출을 막아줄수는 있지만 공백이 포함된 내용은 방지하지 못하기에 .trim() 매서드를 통해서 공백을 제거해준다. (문자열 사이 공백은 유지)