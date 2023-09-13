$(document).ready(function(){
    var customer = [{
        name : $("#name"),
        email : $("#email"),
        pass : $("#pass"),
        cpass : $("#cfpass"),
        birth : $("#birth")
    }]
    function reset(){
        $("myForm").reset();
        }
    
    function register(){
        localStorage.setItem("customers",JSON.stringify(customer));
        console.log(customers)
    }
})