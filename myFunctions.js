$(document).ready(function () {

    $(".details").hide();

    $(".showDetails").change(function () {
        $(this).closest("tr").next(".details").toggle();
    });

});

function showForm() {

    document.getElementById("reservationForm").style.display = "block";

}

function validateForm() {

    var national =
        document.getElementById("national").value;

    var startDate =
        document.getElementById("startDate").value;

    var endDate =
        document.getElementById("endDate").value;

    if (national == "") {
        alert("National Number is required");
        return;
    }

    if (!/^[0-9]{11}$/.test(national)) {
        alert("National Number must contain 11 digits");
        return;
    }

    if (new Date(endDate) <= new Date(startDate)) {
        alert("End Date must be after Start Date");
        return;
    }

    alert("Reservation Completed Successfully");
}