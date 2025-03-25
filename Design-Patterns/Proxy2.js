var RealImage = /** @class */ (function () {
    function RealImage(filename) {
        this.filename = filename;
        this.loadImageFromDisk();
    }
    RealImage.prototype.loadImageFromDisk = function () {
        console.log("Loding Image from Disk: " + this.filename);
    };
    RealImage.prototype.display = function () {
        console.log("Displaying Image: " + this.filename);
    };
    return RealImage;
}());
var ProxyImage = /** @class */ (function () {
    function ProxyImage(filename) {
        this.filename = filename;
    }
    ProxyImage.prototype.display = function () {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    };
    return ProxyImage;
}());
var image = new ProxyImage("example.jpg");
// Image will be loaded from disk
image.display();
// Image will not be loaded again, as it is already cached
image.display();
