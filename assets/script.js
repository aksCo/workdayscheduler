//Weekly Work Scheduler 

$(document).ready(function() {
    var today = moment().format('dddd, MMMM Do YYYY');
    $('#currentDay').text(today);

    var hoursMom = moment().format("HH");
    var hoursArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var tableRows = $(".row");
    var textAreaEl = $("textarea");

    for (var i = 0; i < hoursArr.length; i++) {
        var hoursMomNumber = parseInt(hoursMom);
        var hourshtml = hoursArr[i];
        var rowsLoop = tableRows[i];
        if (hourshtml === hoursMomNumber) {
            $(rowsLoop).addClass("present");
        } else if (hourshtml < hoursMom) {
            $(rowsLoop).addClass("past");
        } else {
            $(rowsLoop).addClass("future");
        }
    }
    var lastasks = JSON.parse(localStorage.getItem("Tasks"));

    if (lastasks != null) {
        $(textAreaEl[0]).text(lastasks.NineAm);
        $(textAreaEl[1]).text(lastasks.TenAm);
        $(textAreaEl[2]).text(lastasks.ElevenAm);
        $(textAreaEl[3]).text(lastasks.TwelvePm);
        $(textAreaEl[4]).text(lastasks.OnePm);
        $(textAreaEl[5]).text(lastasks.TwoPm);
        $(textAreaEl[6]).text(lastasks.ThreePm);
        $(textAreaEl[7]).text(lastasks.FourPm);
        $(textAreaEl[8]).text(lastasks.FivePm);
    }

    function saveTask(event) {
        event.preventDefault();

        var Tasks = {
            NineAm: textAreaEl[0].value.trim(),
            TenAm: textAreaEl[1].value.trim(),
            ElevenAm: textAreaEl[2].value.trim(),
            TwelvePm: textAreaEl[3].value.trim(),
            OnePm: textAreaEl[4].value.trim(),
            TwoPm: textAreaEl[5].value.trim(),
            ThreePm: textAreaEl[6].value.trim(),
            FourPm: textAreaEl[7].value.trim(),
            FivePm: textAreaEl[8].value.trim(),
        }
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }
    $(".saveBtn").on("click", saveTask);
})