async function sprintChallenge5() { // Note the async keyword so you can use `await` inside sprintChallenge5
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇
  // 👇 WORK ONLY BELOW THIS LINE 👇

  // 👇 ==================== TASK 1 START ==================== 👇

  // 🧠 Use Axios to GET learners and mentors.
  // ❗ Use the variables `mentors` and `learners` to store the data.
  // ❗ Use the await keyword when using axios.
// Import Axios if not already imported
 const axios = require('axios');

  let mentors = [];
  let learners = [];

  async function fetchData() {
  try {
    // Replace 'your_api_endpoint_for_mentors' and 'your_api_endpoint_for_learners' with the actual API endpoints.
    const mentorsResponse = await axios.get('your_api_endpoint_for_mentors');
    const learnersResponse = await axios.get('your_api_endpoint_for_learners');

    //Store the data in the variables
    mentors = mentorsResponse.data;
    learners = learnersResponse.data;

    // Log the data to verify
    console.log('Mentors:', mentors);
    console.log('Learners:', learners);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
  }
  // call the functionto fetch the data
  fetchData();


  // 👆 ==================== TASK 1 END ====================== 👆

  // 👇 ==================== TASK 2 START ==================== 👇

  // 🧠 Combine learners and mentors.
  // ❗ At this point the learner objects only have the mentors' IDs.
  // ❗ Fix the `learners` array so that each learner ends up with this exact structure:
  // {
  //   id: 6,
  //   fullName: "Bob Johnson",
  //   email: "bob.johnson@example.com",
  //   mentors: [
  //     "Bill Gates",
  //     "Grace Hopper"
  //   ]`
  // }
  

     // Create a map of mentor IDs to mentor names for quick lookup
     const mentorMap = new Map();
     mentors.forEach(mentor => {
      mentorMap.set(mentor.id, mentor.fullName);
     });
  }
  // Transform learners array to include mentor names instead of IDs
learners = learners.map(learner => {
  const mentorNames = learner.mentorIds.map(id => mentorMap.get(id));
  return {
    id: learner.id,
    fullName: learner.fullName,
    email: learner.email,
    mentors: mentorNames
  };
});

// Log the transformed learners array to verify
console.log('Transfomed Learners:', learners);{
} catch (error) {
  console.error('Error fetching data:', error);

}
// Call the function to fetch and process the data
fetchData();

 // 👆 ==================== TASK 2 END ====================== 👆

  const cardsContainer = document.querySelector('.cards')
  const info = document.querySelector('.info')
  info.textContent = 'No learner is selected';


  // 👇 ==================== TASK 3 START ==================== 👇

  for (let learner of learners) { // looping over each learner object

    // 🧠 Flesh out the elements that describe each learner
    // ❗ Give the elements below their (initial) classes, textContent and proper nesting.
    // ❗ Do not change the variable names, as the code that follows depends on those names.
    // ❗ Also, loop over the mentors inside the learner object, creating an <li> element for each mentor.
    // ❗ Fill each <li> with a mentor name, and append it to the <ul> mentorList.
    // ❗ Inspect the mock site closely to understand what the initial texts and classes look like!

    const card = document.createElement('div');
    const heading = document.createElement('h3');
    const email = document.createElement('div');
    const mentorsHeading = document.createElement('h4');
    const mentorsList = document.createElement('ul');

    // Set initial classes
    card.classList.add('learner-card');
    heading.classList.add('learner-name');
    email.classList.add('learner-email');
    mentorsHeading.classList.add('mentors-heading');
    mentorsList.classList.add('mentors-list');

    // Set text content
    heading.textContent = learner.fullName;
    email.textContent = learner.email;
    mentorsHeading.textContent = 'Mentors';

    // Loop over the mentors inside the learner object
    for (let mentor of learner.mentors) {
      const mentorItem = document.createElement('li');
      mentorItem.textContent = mentor;
      mentorsList.appendChild(mentorItem);
    }

    // Append the elements to the card
    card.appendChild(heading);
    card.appendChild(email);
    card.appendChild(mentorsHeading);
    card.appendChild(mentorsList);

    // Append the card to the document body or specific container (e.g., `document.getElementById('learners-container')`)
      document.getElementById('learners-container').appendChild(card); // change to your target container if needed
    }
   // Call the async function to fetch and process the data
   fetchAndProcessData();

    // 👆 ==================== TASK 3 END ====================== 👆

    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    // 👆 WORK ONLY ABOVE THIS LINE 👆
    card.appendChild(mentorsList)
    card.dataset.fullName = learner.fullName
    cardsContainer.appendChild(card)

    card.addEventListener('click', evt => {
      const mentorsHeading = card.querySelector('h4')
      // critical booleans
      const didClickTheMentors = evt.target === mentorsHeading
      const isCardSelected = card.classList.contains('selected')
      // do a reset of all learner names, selected statuses, info message
      document.querySelectorAll('.card').forEach(crd => {
        crd.classList.remove('selected')
        crd.querySelector('h3').textContent = crd.dataset.fullName
      })
      info.textContent = 'No learner is selected'
      // conditional logic
      if (!didClickTheMentors) {
        // easy case, no mentor involvement
        if (!isCardSelected) {
          // selecting the card:
          card.classList.add('selected')
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      } else {
        // clicked on mentors, we toggle and select no matter what
        card.classList.add('selected')
        if (mentorsHeading.classList.contains('open')) {
          mentorsHeading.classList.replace('open', 'closed')
        } else {
          mentorsHeading.classList.replace('closed', 'open')
        }
        if (!isCardSelected) {
          // if card was not selected adjust texts
          heading.textContent += `, ID ${learner.id}`
          info.textContent = `The selected learner is ${learner.fullName}`
        }
      }
    })
  

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`


// ❗ DO NOT CHANGE THIS CODE. WORK ONLY INSIDE TASKS 1, 2, 3
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
