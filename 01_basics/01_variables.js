const accountId=144553
let accountEmail="aman@google.com"
var accountPassword="1234"
accountCity="Jaipur"
let accountState=
// accountState variable will give you undefined or garbage value in some cases

// accountId=2      //not allowed

accountEmail="hc@hc.com"
accountPassword="5555"
accountCity="Delhi"     //variable can be declared like this as well but should not make in this way

console.log(accountId)

/*
    Prefer not to use var
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);