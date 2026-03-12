function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const triggerOffset = 80;
    return (
        rect.top <= window.innerHeight - triggerOffset &&
        rect.bottom >= 0
    );
}
document.addEventListener("scroll", () => {
    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("show");
        }
    });
});

const cartButtons = document.querySelectorAll('.cart-button');
                
cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
});

function cartClick() {
    let button = this;
    button.classList.add('clicked');

    setTimeout(() => {
        button.classList.remove('clicked');
    }, 4000);
}

document.querySelector('.checkout').addEventListener('click', function() {
    alert('Order completed successfully!\nYou will receive a confirmation email shortly.');
});

function initMap() {
  const mapOptions = {
    center: { lat: 13.938552, lng: 121.521499 },
    zoom: 13,
};

const map = new google.maps.Map(document.getElementById("map"), mapOptions);

const locations = [
    { lat: 13.964222, lng: 121.527514 },
    { lat: 13.960689, lng: 121.528310 },
    { lat: 13.966776, lng: 121.542103 },
];
const customIcon = {
    url: "icon.png",
    scaledSize: new google.maps.Size(50, 50)
};

locations.forEach((location) => {
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Zenfi Audio Store",
        icon: customIcon,
    });
  });
}

//for circle button
const colorPicker = document.getElementById('colorPicker');
let selectedColor = null;

colorPicker.addEventListener('click', (e) => {
    const option = e.target.closest('.color-option');
    if (!option) return;

    selectOption(option);
});

function selectOption(option) {
    if (selectedColor === option) return;

    // Remove selected classes and aria-checked from previous
    if (selectedColor) {
    const prevCircle = selectedColor.querySelector('.color-circle');
    prevCircle.classList.remove('selected-black', 'selected-gray', 'selected-blue');
    selectedColor.setAttribute('aria-checked', 'false');
    }

    // Add selected class and aria-checked
    const circle = option.querySelector('.color-circle');
    const color = option.dataset.color;
    circle.classList.add(`selected-${color}`);
    option.setAttribute('aria-checked', 'true');

    selectedColor = option;
}

// Initially select the first color
selectOption(colorPicker.querySelector('.color-option'));