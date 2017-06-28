(function(){
    console.log("contentscript injected!");

    var resOK= {
        farewell:"contentscript resOK",
        localStorage: window.localStorage,
    };
    var resErr= {
        farewell:"contentscript has error!"
    };

    chrome.runtime.onMessage.addListener(function(request,sender,senderResponse){
        console.log("receiving request comes from extension...");

        if(request.type === "url"){
            senderResponse(resOK);
        }else{
            senderResponse(resErr);
        }
    })
})();
