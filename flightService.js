function calculateFlightPath(flights) {
    const flightMap = new Map;
    const reverseMap = new Map;
    let start = null;

    flights.forEach(([from, to]) => {
        flightMap.set(from, to);
        reverseMap.set(to, from);
    });


    for (let [from] of flightMap) {
        if (!reverseMap.get(from)) {
            if(start !== null) throw new Error('Provided record contain more than 1 flight path'); 
            start = from;
        }
    }

    if (!start) {
        throw new Error('Invalid flight data');
    }

    const flightPath = [];
    let current = start;

    while (current) {
        flightPath.push(current);
        current = flightMap.get(current);
    }

    return [flightPath.at(0), flightPath.at(-1)];
}

module.exports = { calculateFlightPath };
