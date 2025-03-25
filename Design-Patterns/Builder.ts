class Computer {
    public cpu: string;
    public gpu: string;
    public ram: number = 0;
    public storage: number = 0;
    public hasSSD: boolean = false;

    public displayConfiguration(): void {
        console.log("Computer Configuration");
        console.log(`- CPU: ${this.cpu}`);
        console.log(`- GPU: ${this.gpu}`);
        console.log(`- RAM: ${this.ram}`);
        console.log(`- Storage: ${this.storage}`);
        console.log(`- SSD: ${this.hasSSD}`);
    }
}

interface IComputerBuilder {
    setCPU(cpu: string): IComputerBuilder;
    setGPU(gpu: string): IComputerBuilder;
    setRAM(ram: number): IComputerBuilder;
    setStorage(storage: number): IComputerBuilder;
    setSSD(hasSSD: boolean): IComputerBuilder;
    build(): Computer;
}

class ComputerBuilder implements IComputerBuilder {
    private computer: Computer;
    constructor() {
        this.computer = new Computer();
    }
    setCPU(cpu: string): IComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }
    setGPU(gpu: string): IComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }
    setRAM(ram: number): IComputerBuilder {
        this.computer.ram = ram;
        return this;
    }
    setStorage(storage: number): IComputerBuilder {
        this.computer.storage = storage;
        return this;
    }
    setSSD(hasSSD: boolean): IComputerBuilder {
        this.computer.hasSSD = hasSSD;
        return this;
    }
    build(): Computer {
        return this.computer;
    }
}

const gamingPC = new ComputerBuilder()
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