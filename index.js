function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_xpz2s6p";
  const templateID = "template_yzc7zhq";

   /*  emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
       // document.getElementById("file").value = "";
        document.getElementById("message").value = "";
        // var message = document.getElementById("message").value;

        console.log(res);
        alert('Your message sent successfully!!')

    })
 */
    emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      // document.getElementById("file").value = "";
      document.getElementById("message").value = "";
      // var message = document.getElementById("message").value;
  
      console.log(res);
  
      // Create a centered alert div element
      var alertDiv = document.createElement("div");
      alertDiv.id = "centered-alert";
      alertDiv.style.position = "fixed";
      alertDiv.style.top = "50%";
      alertDiv.style.left = "50%";
      alertDiv.style.transform = "translate(-50%, -50%)";
      alertDiv.style.backgroundColor = "lightblue";
      alertDiv.style.padding = "10px";
      alertDiv.style.borderRadius = "5px";
      alertDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.5)";
      alertDiv.style.zIndex = "9999";
  
      // Create the alert message text
      var alertText = document.createTextNode("Your message sent successfully!!");
      alertDiv.appendChild(alertText);
  
      // Add the alert div to the document body
      document.body.appendChild(alertDiv);
  
      // Remove the alert after 2 seconds
      setTimeout(function() {
          alertDiv.remove();
      }, 2000);
  });
  


}

