document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.querySelector("#calendar tbody");

  function createCalendar(year, month) {
    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < firstDay.getDay()) {
          // Empty cells before the first day of the month
          cell.textContent = "";
        } else if (date <= totalDays) {
          cell.textContent = date;

          // Highlight today's date
          const today = new Date();
          if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            cell.classList.add("selected");
          }

          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }

  // Initial display for the current month
  const currentDate = new Date();
  createCalendar(currentDate.getFullYear(), currentDate.getMonth());

  // Event listener for changing the month
  document.addEventListener("click", function (event) {
    if (event.target.tagName === "TD" && event.target.textContent !== "") {
      // Reset previous selected cell
      const selectedCell = document.querySelector(".selected");
      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }

      // Highlight the selected cell
      event.target.classList.add("selected");
    }
  });
});
