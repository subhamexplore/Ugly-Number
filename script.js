const handleSubmit = () => {
    const num = document.getElementById('input').value;  
    const isUgly = (num) => {
    while(num !== 1){
        if(num % 2 === 0){
            num /= 2;
        } else if(num % 3 === 0) {
            num /= 3;
        } else if(num % 5 === 0) {
                num /= 5;
        } else {
            return false;
        };
    };
    return true;
};
if(isUgly(num)){
    alert(num + " is an Ugly Number")
}
else{
    alert(num + " is not an Ugly Number")
}
}