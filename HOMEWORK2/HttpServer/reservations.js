var reservations = [
    {
        "id": 1,
        "people": 10,
        "hour": "8:00",
        "reasons" : ["party", "birthday"]
    },
    {
        "id": 2,
        "people": 2,
        "hour": "5:00",
        "reasons" : ["business dinner"]
    },
    {
        "id": 3,
        "people": 5,
        "hour": "6:00",
        "reasons" : ["party", "wedding"]
    },
    {
        "id": 4,
        "people": 2,
        "hour": "10:00",
        "reasons" : ["conference"]
    },
    {
        "id": 5,
        "people": 3,
        "hour": "8:00",
        "reasons" : ["graduation"]
    },
];


exports.getReservation = function(id){
    var reservation = reservations.find(function(reservation){
        return reservation.id.toString() === id;
    });

    return reservation;
};

exports.getAll = function(){
    return reservations;
};

exports.delete = function(id){    
    var reservation = reservations.find(function(reservation){
        return reservation.id.toString() === id;
    });

    if(reservation){
        reservations.splice(reservations.indexOf(reservation), 1);
        return true;
    }

    return false;
};

exports.deleteAll = function(){
    reservations.length = 0;
};

exports.create = function(reservation, reqId){
    var id = Math.max.apply(Math, reservations.map(function(reservation) { 
        return reservation.id; })) + 1;
    
    if(reqId){
        id = reqId;
    }

    reservations.push({
        id: id,
        people: reservation.people,
        hour: reservation.hour,
        reasons: reservation.reasons
    });

    return reservations.find(function(reservation){
        return reservation.id.toString() === id;
    });
};

exports.update = function(reservation, id){
    var existingReservation = reservations.find(function(res){
        return res.id === id;
    });

    if(reservation.hour){
        existingReservation.hour = reservation.hour;
    }
    if(reservation.people){
        existingReservation.people = reservation.people;
    }
    if(reservation.reasons){
        existingReservation.reasons = reservation.reasons;
    }
    reservations.splice(reservations.indexOf(existingReservation), 1, existingReservation);
};