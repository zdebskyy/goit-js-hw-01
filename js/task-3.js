let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
const userLog = prompt ('Enter password');

if (userLog === null){
    message = 'Canceled'
    console.log(message); 
}
else if(userLog === ADMIN_PASSWORD){
    message = 'Welcome';
    console.log(message);
} else {
    message = 'Access denied, wrong password';
    console.log(message);
}
alert (message);

