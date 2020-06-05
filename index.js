// https://script.google.com/macros/s/AKfycbxCl2YBSMyrp-2zWeBt70vztI4axWAAwSAdfRWtX2KVD83rOsXy/exec?name=Testing&email=Testing&subject=Testing&message=Testing

const baseUrl = 'https://script.google.com/macros/s/AKfycbxCl2YBSMyrp-2zWeBt70vztI4axWAAwSAdfRWtX2KVD83rOsXy/exec';

const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

const handleSubmit = e => {
  e.preventDefault();

  const url = `${baseUrl}?name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`;

  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}