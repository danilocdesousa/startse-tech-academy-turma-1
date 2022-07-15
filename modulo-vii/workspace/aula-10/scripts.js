function convertKmToMile() {
    let mile = document.querySelector("#mileValue").value;
    document.querySelector("#result").textContent = mile * 1.60934;
}