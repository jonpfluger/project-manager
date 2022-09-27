var projectForm = $('#project-form')
var projectNameInput = $('#project-name-input')
var projectTypeSelect = $('#project-type-input')
var hourlyRateInput = $('#hourly-rate-input')
var timeDisplay = $('#time-display')
var dueDateInput = $('#due-date-input')
var projectModal = $('#project-modal')

function handleSubmit(event) {
    event.preventDefault()

    // get data from inputs
    var name = projectNameInput.val()
    var projectType = projectTypeSelect.val()
    var hourlyRate = hourlyRateInput.val()
    var dueDate = dueDateInput.val()

    console.log(name, projectType, hourlyRate, dueDate)
    
    // show data in table

    // hide the modal
    projectModal.modal('hide')

    // clear inputs
    projectNameInput.val("")
    projectTypeSelect.val("")
    hourlyRateInput.val("")
    dueDateInput.val("")

}

// sets current time display in header
timeDisplay.text(moment().format('MMM Do, YYYY | hh:mm a'))

// submit form
projectForm.on('submit', handleSubmit)

// jQuery UI datepicker
dueDateInput.datepicker()






