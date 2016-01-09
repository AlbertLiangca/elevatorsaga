var a =

{
    init: function (elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        var floorToGo = [];

        //Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle1", function () {
            // let's go to all the floors (or did we forget one?)
        });

        elevator.on("floor_button_pressed", function (floorNum) {
            elevator.goToFloor(floorNum);
            console.log('floor_button_pressed', floorNum);
            floorToGo.push;
        });

        _.each(floors, function (floor, floorNum) {
            floor.on("up_button_pressed", function () {
                floorToGo.pop;
                elevator.goToFloor(floorNum);
                console.log('up_button_pressed', floorNum);
            });
            floor.on("down_button_pressed", function () {
                floorToGo.pop;
                elevator.goToFloor(floorNum);
                console.log('down_button_pressed', floorNum);
            });
        });
    },

    update: function (dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}