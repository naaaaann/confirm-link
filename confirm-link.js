/*
    확인 메시지 출력 후 이동하는 링크 구현
    만든이 : 피카츄
*/



    //목표: .confirm-link를 누르면 확인창 출력 후 확인메시지 출력
    window.addEventListener("load", function(){
        var confirmLinkList = document.querySelectorAll(".confirm-link");
        for(var i=0; i < confirmLinkList.length; i++){
            confirmLinkList[i].addEventListener("click", function(e){
                //안내메시지 설정
                var text = this.dataset.message || "정말 이동하시겠습니까?";
                //var text;
                //if(!this.dataset.message){
                //    text = "정말 이동하시겠습니까?";
                //}
                //else {
                //    text = this.dataset.message;
                //}

                var choice = window.confirm(text);
                if(choice == false){
                    e.preventDefault();
                }
            });
        }
    });
