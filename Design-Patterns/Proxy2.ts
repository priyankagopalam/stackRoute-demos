interface Image {
    display(): void;
}

class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImageFromDisk();
    }

    private loadImageFromDisk(): void {
        console.log("Loading Image from Disk: " + this.filename);
    }

    public display(): void {
        console.log("Displaying Image: " + this.filename);
    }
}

class ProxyImage implements Image {
    private filename: string;
    private realImage: RealImage;

    constructor(filename: string) {
        this.filename = filename;
    }

    public display(): void {
        if(this.realImage==null){
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const image = new ProxyImage("example.jpg");

// Image will be loaded from disk
image.display();

// Image will not be loaded again, as it is already cached
image.display();