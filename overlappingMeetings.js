var minMeetingRooms = function(intervals) {
    if (intervals.length <= 0){
        return 0;
    }
    if (intervals.length === 1){
        return 1;
    }
    
    intervals = intervals.sort((a,b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1;
    });
    
    let maxRooms = 1;
    let currentMeetings = [intervals[0]];
    let latestEndTime = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++){
        let meeting = intervals[i];
    
        if (meeting[0] < latestEndTime){
            latestEndTime = Math.max(latestEndTime, meeting[1]);
            for(let i = 0; i < currentMeetings.length; i++){
                if (currentMeetings[i][1] <= meeting[0]){
                    currentMeetings[i] = null;
                } else {
                    continue;
                }
            }
            currentMeetings = currentMeetings.filter(x => x !== null);
            currentMeetings.push(meeting);
        } else{
            latestEndTime = meeting[1];
            currentMeetings = [meeting];
        }
        
        maxRooms = Math.max(maxRooms, currentMeetings.length);
    }
    return maxRooms;
};
minMeetingRooms([[0, 30],[5, 10],[15, 20]]);