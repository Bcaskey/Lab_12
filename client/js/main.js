$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on 
//that here: https://learn.jquery.com/using-jquery-core/document-ready */
	function postData() {
    //     $.ajax({
    //     url: url,
    //     type: "POST",
    //     data: JSON.stringify(data),
    //     contentType: "application/json",
    //     complete: callback
    // });
        
            $("submit").click(function(){
                $.post("/messages", { text: "testing text", userName: "testing userName"},
                function(data,status){
                    console.log("Data: " + data + "\nStatus: " + status);
                });
            });
        
        
        
        
        
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'  --  messages.txt
			2) After posted prepend message to list of messages and clear input box */
	}

	function getData() {
        
    
    $.get("/messages", function(results) {
        var textArray = results.split('\n');
        textArray.forEach(function(text) {
            var parsedText = JSON.parse(text);//parsedText is now a JavaScript Object
            $("textarea").append(parsedText.text);
            // console.log(parsedText.text);
            
            // $.each(response.data, function(index, value) {
            //     $("body").append('<a href="' + value.path + '">' + value.title + '</a>');
            //     $("body").append('<p class="date">Created: ' + value.created_formated + '</p><br />');
            // });
            
            
            
            for (i = 0; i < parsedText.length; i++) { 
                // eachLine += parsedText[i] + "<br>";
                    //console.log(parsedText.text);
                // document.getElementById("messageBox").innerHTML = parsedText.text + "<br>"; //this works
            }
        });
        
    });
      
		/*This function should make a get request from 'database', parse the data and prepend each 
        //to the page*/
	}

	/*Calls function once page loaded to display tweets to page*/
	getData();
});
