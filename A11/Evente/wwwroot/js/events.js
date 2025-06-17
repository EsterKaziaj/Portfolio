// events.js - JavaScript for the Events page
document.addEventListener('DOMContentLoaded', function () {
    // Initialize event filtering
    initEventPageFilters();

    // Initialize pagination
    initPagination();
});

// Event page specific filtering
function initEventPageFilters() {
    const typeSelect = document.getElementById('eventsPageType');
    const locationSelect = document.getElementById('eventsPageLocation');
    const dateInput = document.getElementById('eventsPageDate');
    const searchBtn = document.getElementById('searchEventsBtn');

    // Add event listener to search button
    if (searchBtn) {
        searchBtn.addEventListener('click', function () {
            filterEventsPage();
        });
    }

    // Set up debug output
    console.log("Events page filters initialized");

    // Helper function to format date to match data-date attribute format
    function formatDate(dateString) {
        if (!dateString) return '';

        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    // Main filtering function for events page
    function filterEventsPage() {
        const typeFilter = typeSelect ? typeSelect.value : '';
        const locationFilter = locationSelect ? locationSelect.value : '';
        const dateFilter = dateInput ? formatDate(dateInput.value) : '';

        console.log("Applying events page filters:", {
            type: typeFilter,
            location: locationFilter,
            date: dateFilter
        });

        // Get all event cards
        const eventCards = document.querySelectorAll('.event-card');
        let visibleCount = 0;

        // Loop through each card
        eventCards.forEach(card => {
            // Default to showing the card
            let shouldShow = true;

            // Apply event type filter if selected
            if (typeFilter && typeFilter !== '' && card.getAttribute('data-event-type') !== typeFilter) {
                shouldShow = false;
            }

            // Apply location filter if selected
            if (shouldShow && locationFilter && locationFilter !== '' &&
                card.getAttribute('data-location') !== locationFilter) {
                shouldShow = false;
            }

            // Apply date filter if selected
            if (shouldShow && dateFilter && dateFilter !== '' &&
                card.getAttribute('data-date') !== dateFilter) {
                shouldShow = false;
            }

            // Show or hide the card
            if (shouldShow) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        console.log("Visible events after filtering:", visibleCount);

        // Show "no events" message if needed
        updateNoEventsMessage(visibleCount);
    }

    // Helper function to show/hide "no events" message
    function updateNoEventsMessage(visibleCount) {
        let noEventsMessage = document.querySelector('.no-events-message');

        if (visibleCount === 0) {
            if (!noEventsMessage) {
                noEventsMessage = document.createElement('div');
                noEventsMessage.className = 'no-events-message';
                noEventsMessage.innerHTML = `
                    <i class="far fa-calendar-times"></i>
                    <h3>No Events Found</h3>
                    <p>We couldn't find any events matching your filter criteria. Try different filters or check back later.</p>`;

                const eventsGrid = document.querySelector('.events-grid');
                if (eventsGrid) {
                    eventsGrid.appendChild(noEventsMessage);
                }
            }
        } else if (noEventsMessage) {
            noEventsMessage.remove();
        }
    }
}

// Simple pagination functionality
function initPagination() {
    const pageLinks = document.querySelectorAll('.page-link');

    pageLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            pageLinks.forEach(p => p.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // In a real implementation, this would load a new page of events
            // For now, just scroll to top of events section
            window.scrollTo({
                top: document.querySelector('.events-grid-section').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
}
// Newsletter subscription
$('.btn-subscribe').click(function () {
    var email = $(this).prev('input').val();
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Thank you for subscribing!');
        $(this).prev('input').val('');
    } else {
        alert('Please enter a valid email address.');
    }
});