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

// Event listener for form submission
const feedbackForm = document.getElementById('feedbackForm');
feedbackForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents default form submission for demonstration

  // You can handle form submission here (e.g., send data to a server)
  const formData = new FormData(feedbackForm);
  // Process formData as needed (e.g., send it to a backend using fetch)
  console.log(formData);

  // Show submission confirmation to the user
  alert('Form submitted successfully!');
  
  // Reset form values after submission
  feedbackForm.reset();
});

// Call the function to populate the dropdown when the page loads
window.onload = populateDropdown;
