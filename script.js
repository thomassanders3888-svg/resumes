// ResumePro - Template Marketplace

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const submitBtn = document.getElementById('submit-btn');

function openModal(templateName, price) {
    document.getElementById('template-name').value = templateName;
    document.getElementById('template-price').value = price;
    
    if (price === 0) {
        modalTitle.textContent = 'Get Free Template';
        submitBtn.textContent = 'Download Free Template';
    } else {
        modalTitle.textContent = `Buy ${templateName} - $${price}`;
        submitBtn.textContent = `Continue to Payment ($${price})`;
    }
    
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const template = document.getElementById('template-name').value;
    const price = document.getElementById('template-price').value;
    
    if (price === '0') {
        alert(`Thanks ${name}! Your free ${template} template download will begin shortly.`);
        closeModal();
        // Store email for follow-up
        console.log('Lead captured:', {name, email, template});
    } else {
        alert(`Redirecting to payment for ${template}...`);
        // Would redirect to Stripe/PayPal here
        closeModal();
    }
}

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// AdSense
try {
    (adsbygoogle = window.adsbygoogle || []).push({});
} catch(e) { console.log('AdSense not loaded'); }
