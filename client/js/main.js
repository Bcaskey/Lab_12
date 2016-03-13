$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on 
//that here: https://learn.jquery.com/using-jquery-core/document-ready */
    function postData() {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'  --  messages.txt
			2) After posted prepend message to list of messages and clear input box */
    $("submit_btn").on('click', function(e){
        e.preventDefault();
            console.log("test return");
        $.post("/messages", {text: "testing", userName: "Brian"});
    });    
	}

	function getData() {
        
    $.get("/messages", function(results) {
        var textArray = results.split('\n');
        var extraCode = "<br><br>";
        textArray.forEach(function(text) {
            var parsedText = JSON.parse(text);//parsedText is now a JavaScript Object
            $("textarea").append((parsedText.text) + extraCode);
            
            for (i = 0; i < parsedText.length; i++) { 
               
            }
        });
    });
      
	}

	getData();
});
