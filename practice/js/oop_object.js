// var videoName = "Intro to Js";
// var fileFormat = "mp4";
// var duration = "2:48";
// var owner = "Nikunj";
// function getVideoName(){
//     return videoName;
// }

// function getFileFormat(){
//     return fileFormat;
// }

// function getDuration(){
//     return duration;
// }

// function getowner(){
//     return owner;
// }

// create object in js
var video = {
    videoName : "Intro to Js",
    fileFormat : "mp4",
    duration : "2:48",
    owner : "Nikunj",
    getVideoName : function(){
        return this.videoName;
    },
    getFileFormat : function(){
        return this.fileFormat;
    },
    getDuration : function(){
        return this.duration;
    },
    getowner : function(){
        return this.owner;
    }

}
console.log(video.getFileFormat());

var firstName = "Gopal";
var person = {
    firstName : 'NIKUNJ',
    dob : 2002,
    getfirstname : function(){
        return this.firstName;
    },
    parents : {
        firstName : 'poonam',
        dob : 1989,
        getfirstname : function(){
            return this.firstName;
        }
    }
}
console.log(person.getfirstname())
console.log(person.dob)
console.log(person.parents.getfirstname())
console.log("hello"+'hii');