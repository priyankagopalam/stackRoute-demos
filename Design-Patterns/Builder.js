var Computer = /** @class */ (function () {
    function Computer() {
        this.ram = 0;
        this.storage = 0;
        this.hasSSD = false;
    }
    Computer.prototype.displayConfiguration = function () {
        console.log("Computer Configuration");
        console.log("- CPU: ".concat(this.cpu));
        console.log("- GPU: ".concat(this.gpu));
        console.log("- RAM: ".concat(this.ram));
        console.log("- Storage: ".concat(this.storage));
        console.log("- SSD: ".concat(this.hasSSD));
    };
    return Computer;
}());
var ComputerBuilder = /** @class */ (function () {
    function ComputerBuilder() {
        this.computer = new Computer();
    }
    ComputerBuilder.prototype.setCPU = function (cpu) {
        this.computer.cpu = cpu;
        return this;
    };
    ComputerBuilder.prototype.setGPU = function (gpu) {
        this.computer.gpu = gpu;
        return this;
    };
    ComputerBuilder.prototype.setRAM = function (ram) {
        this.computer.ram = ram;
        return this;
    };
    ComputerBuilder.prototype.setStorage = function (storage) {
        this.computer.storage = storage;
        return this;
    };
    ComputerBuilder.prototype.setSSD = function (hasSSD) {
        this.computer.hasSSD = hasSSD;
        return this;
    };
    ComputerBuilder.prototype.build = function () {
        return this.computer;
    };
    return ComputerBuilder;
}());
var gamingPC = new ComputerBuilder()
    .setCPU("Intel i9")
    .setGPU("NVIDIA RTX 4090")
    .setRAM(32)
    .setStorage(1000)
    .setSSD(true)
    .build();
gamingPC.displayConfiguration();
// class ComputerUser{
//     static buildGamingPC(builder: IComputerBuilder): Computer{
//         return builder
//         .setCPU("Intel i9")
//         .setGPU("NVIDIA RTX 4090")
//         .setRAM(32)
//         .setStorage(1000)
//         .setSSD(true)
//         .build();
//     }
//     static buildOfficePC(builder: IComputerBuilder): Computer{
//         return builder
//         .setCPU("Intel i5")
//         .setGPU("Integrated Graphics")
//         .setRAM(16)
//         .setStorage(500)
//         .setSSD(false)
//         .build();
//     }
// }
// const gamingPC = ComputerUser.buildGamingPC(new ComputerBuilder());
// gamingPC.displayConfiguration();
