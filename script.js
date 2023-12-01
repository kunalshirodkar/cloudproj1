// JavaScript to populate the product dropdown
const productDropdown = document.getElementById('productDropdown');

// Assuming you have an array of products
const products = ['Shoes', 'Jeans', 'Dress'];

// Function to populate dropdown options
function populateDropdown() {
  products.forEach(product => {
    const option = document.createElement('option');
    option.text = product;
    productDropdown.add(option);
  });
}

// Function to send form data to backend/Cosmos DB
function sendDataToCosmosDB(formData) {
  fetch('/submit-feedback', { // Replace with your backend endpoint
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product: formData.get('productDropdown'),
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
  })
  .catch(error => {
    console.error('There was an error sending data:', error);
    alert('Form submission failed. Please try again.');
  });
}

// Event listener for form submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents default form submission for demonstration

  const formData = new FormData(feedbackForm);
  sendDataToCosmosDB(formData); // Send form data to Cosmos DB or backend
  feedbackForm.reset(); // Reset form values after submission
});

// Call the function to populate the dropdown when the page loads
window.onload = populateDropdown;
