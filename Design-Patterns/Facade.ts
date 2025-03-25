class TV {
    public turnOn(): void {
        console.log("TV is turned on");
    }
    public turnOff(): void {
        console.log("TV is turned off");
    }
    public setInput(source: string): void {
        console.log(`TV input set ot ${source}`);
    }
}

class SoundSystem {
    public turnOn(): void {
        console.log("Sound system is turned on");
    }
    public turnOff(): void {
        console.log("Sound system is turned off");
    }
    public setVolume(level: number): void {
        console.log(`Sound system volume set to ${level}`);
    }
}

class Lights {
    public dim(level: number): void {
        console.log(`Lights dimmed to ${level}`);
    }
    public turnOff(): void {
        console.log("Lights turned off");
    }
}

class StreamingService {
    public play(movie: string): void {
        console.log(`Noew Playing ${movie}`);
    }
    public stop(): void {
        console.log("Streaming stopped");
    }
}

// Facade: Home Theatre System
class HomeTheatre {
    private tv: TV;
    private soundSystem: SoundSystem;
    private lights: Lights;
    private streamingService: StreamingService;
    constructor() {
        this.tv = new TV();
        this.soundSystem = new SoundSystem();
        this.lights = new Lights();
        this.streamingService = new StreamingService();
    }

    public watchMovie(movie: string): void {
        this.lights.dim(10);
        this.tv.turnOn();
        this.tv.setInput("HDMI 1");
        this.soundSystem.turnOn();
        this.soundSystem.setVolume(50);
        this.streamingService.play(movie);
        console.log("Movie started....");
    }

    public turnOffSystem(): void{
        console.log("Turning off the home theatre system");
        this.streamingService.stop();
        this.tv.turnOff();
        this.soundSystem.turnOff();
        this.lights.turnOff();
        console.log("System turned off");
    }
}

const homeTheatre = new HomeTheatre();
homeTheatre.watchMovie("Avengers");
homeTheatre.turnOffSystem();