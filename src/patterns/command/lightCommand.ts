// The recievers
export class light{
    public on(): string{
        return 'on';
    }

    public off(): string{
        return 'off';
    }
}


var value:number=0      //This variable represents luminousity

export class RedLight extends light{

    // Only red light can change luminosity
    public increaseLuminosity(): string {
        value++;
        return `red${value}`
    }

    public decreaseLuminosity(): string {
        value--;
        return `red${value}`

    }
}


// The Commands
export interface Command{
    execute(): string;
}

export class lightOnCommand implements Command{

    private light: light;
    constructor(inputLight: light){
        this.light = inputLight;
    }

    execute(): string {
        return this.light.on();
    }
}

export class lightOffCommand implements Command{

    private light: light;
    constructor(inputLight: light){
        this.light = inputLight;
    }

    execute(): string {
        return this.light.off();
    }
}

export class increaseLuminosityCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }
}

export class decreaseLuminosityCommand implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }
}

//This is the invoker
export class RemoteController {
    commandSlot!: Command;

    setCommand(command: Command) {
        this.commandSlot = command;
    }

    executeCommand() {
        return this.commandSlot.execute()
    }
}