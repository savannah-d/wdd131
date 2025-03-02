document.addEventListener("DOMContentLoaded", function () {
    let participantCount = 1; // Start with 1 participant
  
    // Add event listener to the "Add Participant" button
    document.getElementById("add").addEventListener("click", function () {
      participantCount++; // Increase participant count
  
      // Generate new participant section and insert it before the Add button
      let addButton = document.getElementById("add");
      addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
  
      console.log(`Added participant ${participantCount}`); // Debugging log
    });
  
    // Add event listener to the form submission
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Stop the form from reloading the page
  
      // Get all fee inputs
      let feeInputs = document.querySelectorAll("[id^=fee]");
      let totalFees = 0;
  
      feeInputs.forEach((input) => {
        let feeValue = parseFloat(input.value) || 0; // Convert input to a number, default to 0 if empty
        totalFees += feeValue;
      });
  
      // Get the adult name
      let adultName = document.getElementById("adult_name").value || "Participant";
  
      // Hide the form
      document.querySelector("form").style.display = "none";
  
      // Show the summary message
      let summary = document.getElementById("summary");
      summary.innerHTML = `<h2>Thank you, ${adultName}, for registering.</h2>
                           <p>You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in Fees.</p>`;
      summary.style.display = "block";
    });
  });
  
  // Function to generate participant HTML
  function participantTemplate(count) {
    return `
      <section class="participant participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
          <label for="fname${count}"> First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" min="0" step="0.01" />
        </div>
        <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
          <p>Grade</p>
          <select id="grade${count}" name="grade${count}">
            <option selected value="" disabled></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </section>
    `;
  }
  