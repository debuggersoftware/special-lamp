export const fetchBookings = async () => {
    const response = await fetch("https://your-api.com/bookings");
    return response.json();
};
