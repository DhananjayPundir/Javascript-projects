document.getElementById('btn').addEventListener('click',generatePassword);

function generatePassword(){
    const length = document.getElementById('passwordlength').value;
    const upperCase = document.getElementById('uppercase').checked;
    const lowerCase = document.getElementById('lowercase').checked;
    const numberCase = document.getElementById('numbers').checked;
    const symbolCase = document.getElementById('symbols').checked;
    const uc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lc = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const sym = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charset = '';
    if(upperCase) charset += uc;
    if(lowerCase) charset += lc;
    if(numberCase) charset +=num;
    if(symbolCase) charset += sym;

    if (charset === '') {
        alert('Please select at least one character type');
        return;
    }

    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('password').textContent = password;
}   