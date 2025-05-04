function UI(hotel) {
    this.hotel = hotel;
}

UI.prototype.renderRooms = function () {
    const container = document.getElementById("roomsContainer");
    container.innerHTML = "";

    this.hotel.rooms.forEach(room => {
        const roomDiv = document.createElement("div");
        roomDiv.className = `room ${room.isAvailable ? "" : "booked"}`;
        roomDiv.innerHTML = `
            <h3>Room ${room.roomNumber} (${room.style})</h3>
            <p>Status: ${room.isAvailable ? "Available" : "Booked"}</p>
            <button onclick>="bookRoom(${room.roomNumber})" ${room.isAvailable ? "" : "disabled"}</button>
            <button onclick>="cancelBooking(${room.roomNumber})" ${room.isAvailable ? "disabled" : ""}>Cancel</button>
        `;
        container.appendChild(roomDiv);
    });
};

module.exports = UI;