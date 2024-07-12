document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const hotel = document.getElementById('hotel').value;
    const roomType = document.getElementById('roomType').value;
    const numGuests = parseInt(document.getElementById('numGuests').value);
    const allInclusive = document.getElementById('allInclusive').checked;

    const roomPrices = {
        "Estándar": 2500,
        "Vista al mar": 3500,
        "Delux": 7000,
        "Royal Level Luxury": 15000
    };

    const sargazoTax = {
        "Riviera Maya": 0.20,
        "Maya Beach": 0.20,
        "Maya Palace": 0,
        "Allegro Playacar": 0.20,
        "Occidental at Xcaret": 0
    };

    const basePrice = roomPrices[roomType];
    const tax = sargazoTax[hotel];
    const extraGuestFee = (numGuests - 1) * (basePrice * 0.10);
    const allInclusiveCost = allInclusive ? numGuests * 1500 : 0;

    const totalCost = basePrice + (basePrice * tax) + extraGuestFee + allInclusiveCost;

    const resultTable = document.getElementById('reservationResult');
    resultTable.innerHTML = `
        <tr>
            <td>${hotel}</td>
            <td>${roomType}</td>
            <td>${numGuests}</td>
            <td>${allInclusive ? 'Sí' : 'No'}</td>
            <td>$${totalCost.toFixed(2)}</td>
        </tr>
    `;
});
