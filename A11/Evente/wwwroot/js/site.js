// Fixed JavaScript with working weekday filter
document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Update active link on scroll
    window.addEventListener('scroll', function () {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Important: Initialize debug tools
    setupDebugTools();

    // Add event listeners for dropdowns
    const weekdaySelect = document.getElementById('weekdays');
    const eventTypeSelect = document.getElementById('eventType');
    const categorySelect = document.getElementById('category');

    if (weekdaySelect) weekdaySelect.addEventListener('change', applyFilters);
    if (eventTypeSelect) eventTypeSelect.addEventListener('change', applyFilters);
    if (categorySelect) categorySelect.addEventListener('change', applyFilters);

    // Make cards clickable
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        card.addEventListener('click', function (e) {
            if (!e.target.closest('a')) {
                window.location.href = '/Events';
            }
        });
    });

    // Load more button redirect
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function () {
            window.location.href = '/Events';
        });
    }
});

function scrollToFooter() {
    document.querySelector('.site-footer').scrollIntoView({
        behavior: 'smooth'
    });
}

// Helper function to show current filter state and card attributes
function setupDebugTools() {
    console.log("Setting up debug tools");

    // Add a small debugging UI if needed during development
    // You can remove this in production
    const eventCards = document.querySelectorAll('.event-card');
    console.log("Found " + eventCards.length + " event cards");

    // Log each card's data attributes
    eventCards.forEach((card, index) => {
        console.log("Card " + (index + 1) + " attributes:", {
            weekday: card.getAttribute('data-weekday'),
            eventType: card.getAttribute('data-event-type'),
            category: card.getAttribute('data-category')
        });
    });
}

// Apply filters to event cards
function applyFilters() {
    // Get selected values from dropdowns
    const weekdayFilter = document.getElementById('weekdays').value;
    const eventTypeFilter = document.getElementById('eventType').value;
    const categoryFilter = document.getElementById('category').value;

    console.log("Applying filters:", {
        weekday: weekdayFilter,
        eventType: eventTypeFilter,
        category: categoryFilter
    });

    // Get all event cards
    const eventCards = document.querySelectorAll('.event-card');
    let visibleCount = 0;

    // Check each card against the filters
    eventCards.forEach(card => {
        const cardWeekday = card.getAttribute('data-weekday');
        const cardEventType = card.getAttribute('data-event-type');
        const cardCategory = card.getAttribute('data-category');

        // Default to showing the card
        let shouldShow = true;

        // Apply weekday filter if selected
        if (weekdayFilter && weekdayFilter !== "" && cardWeekday !== weekdayFilter) {
            shouldShow = false;
            console.log("Card hidden by weekday filter", {
                card: card.querySelector('h3').textContent,
                cardWeekday,
                weekdayFilter
            });
        }

        // Apply event type filter if selected
        if (shouldShow && eventTypeFilter && eventTypeFilter !== "" && cardEventType !== eventTypeFilter) {
            shouldShow = false;
            console.log("Card hidden by event type filter");
        }

        // Apply category filter if selected
        if (shouldShow && categoryFilter && categoryFilter !== "" && cardCategory !== categoryFilter) {
            shouldShow = false;
            console.log("Card hidden by category filter");
        }

        // Show or hide the card
        if (shouldShow) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    console.log("Visible cards after filtering:", visibleCount);

    // Show or hide "no events" message
    let noEventsMessage = document.querySelector('.no-events-message');
    if (visibleCount === 0) {
        if (!noEventsMessage) {
            noEventsMessage = document.createElement('div');
            noEventsMessage.className = 'no-events-message';
            noEventsMessage.textContent = 'No events match your filter criteria. Please try different filters.';
            document.querySelector('.events-grid').appendChild(noEventsMessage);
        }
    } else if (noEventsMessage) {
        noEventsMessage.remove();
    }
}