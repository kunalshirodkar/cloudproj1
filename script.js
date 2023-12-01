const productDropdown = document.getElementById('productDropdown');
const feedbackForm = document.getElementById('feedbackForm');

const products = ['Shoes', 'Jeans', 'Dress'];

function populateDropdown() {
  products.forEach(product => {
    const option = document.createElement('option');
    option.text = product;
    productDropdown.add(option);
  });
}

function sendDataToCosmosDB(formData) {
  fetch('/submit-feedback', { // Replace with your backend endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products: formData.get('productDropdown'),
      name: formData.get('name'),
      email: formData.get('email'),
      feedback: formData.get('feedback')
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data sent:', data);
    alert('Form submitted successfully!');
    feedbackForm.reset(); // Reset form values after successful submission
  })
  .catch(error => {
    console.error('There was an error sending data:', error);
    alert('Form submission failed. Please try again.');
  });
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (!name || !email || !feedbackForm.checkValidity()) {
    alert('Please fill in all fields correctly before submitting.');
    return false;
  }
  return true;
}

feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateForm()) {
    const formData = new FormData(feedbackForm);
    sendDataToCosmosDB(formData);
  }
});

window.onload = populateDropdown;
