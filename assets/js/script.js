var projectForm = $('#project-form')
var projectNameInput = $('#project-name-input')
var projectTypeSelect = $('#project-type-input')
var hourlyRateInput = $('#hourly-rate-input')
var timeDisplay = $('#time-display')
var dueDateInput = $('#due-date-input')
var projectModal = $('#project-modal')
var projectDisplay = $('#project-display')
var today = moment()

function renderTableData (name, projectType, hourlyRate, dueDate) {
    console.log(name, projectType, hourlyRate, dueDate)
    var tr = $('<tr>')
    $('<td>').text(name).appendTo(tr)
    $('<td>').text(projectType).appendTo(tr)
    $('<td>').text(hourlyRate).appendTo(tr)
    $('<td>').text(dueDate).appendTo(tr)
    // cell for the days until due date: today until dueDate
    var daysLeft = moment(dueDate).diff(today, 'days')
    $('<td>').text(daysLeft).appendTo(tr)
    // cell for Potential Total Earnings ($) = hourlyRate * 8 * days
    var potentialEarnings = (parseFloat(hourlyRate) * 8) * daysLeft
    $('<td>').text('$' + potentialEarnings).appendTo(tr)

    projectDisplay.append(tr)
}

function handleSubmit(event) {
    event.preventDefault()

    // get data from inputs
    var name = projectNameInput.val()
    var projectType = projectTypeSelect.val()
    var hourlyRate = hourlyRateInput.val()
    var dueDate = dueDateInput.val()
    
    renderTableData(name, projectType, hourlyRate, dueDate)

    // hide the modal
    projectModal.modal('hide')

    // clear inputs
    projectNameInput.val("")
    projectTypeSelect.val("")
    hourlyRateInput.val("")
    dueDateInput.val("")
}


// sets current time display in header
timeDisplay.text(today.format('MMM Do, YYYY | hh:mm a'))

// submit form
projectForm.on('submit', handleSubmit)

// jQuery UI datepicker
dueDateInput.datepicker()






