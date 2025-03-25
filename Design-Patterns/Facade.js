var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV is turned on");
    };
    TV.prototype.turnOff = function () {
        console.log("TV is turned off");
    };
    TV.prototype.setInput = function (source) {
        console.log("TV input set ot ".concat(source));
    };
    return TV;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.turnOn = function () {
        console.log("Sound system is turned on");
    };
    SoundSystem.prototype.turnOff = function () {
        console.log("Sound system is turned off");
    };
    SoundSystem.prototype.setVolume = function (level) {
        console.log("Sound system volume set to ".concat(level));
    };
    return SoundSystem;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function (level) {
        console.log("Lights dimmed to ".concat(level));
    };
    Lights.prototype.turnOff = function () {
        console.log("Lights turned off");
    };
    return Lights;
}());
var StreamingService = /** @class */ (function () {
    function StreamingService() {
    }
    StreamingService.prototype.play = function (movie) {
        console.log("Noew Playing ".concat(movie));
    };
    StreamingService.prototype.stop = function () {
        console.log("Streaming stopped");
    };
    return StreamingService;
}());
// Facade: Home Theatre System
var HomeTheatre = /** @class */ (function () {
    function HomeTheatre() {
        this.tv = new TV();
        this.soundSystem = new SoundSystem();
        this.lights = new Lights();
        this.streamingService = new StreamingService();
    }
    HomeTheatre.prototype.watchMovie = function (movie) {
        this.lights.dim(10);
        this.tv.turnOn();
        this.tv.setInput("HDMI 1");
        this.soundSystem.turnOn();
        this.soundSystem.setVolume(50);
        this.streamingService.play(movie);
        console.log("Movie started....");
    };
    return HomeTheatre;
}());
var homeTheatre = new HomeTheatre();
homeTheatre.watchMovie("Avengers");
