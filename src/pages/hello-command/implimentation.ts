import {
    light,
    RedLight,
    increaseLuminosityCommand,
    decreaseLuminosityCommand,
    RemoteController,
    Command,
    lightOnCommand,
    lightOffCommand
} from "../../patterns/command/LightCommand";

// To keep track of if the red light is on
let isRedLightOn = false;

export function createInvoker(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()
}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = isRedLightOn ? createInvoker(new lightOnCommand(new RedLight())) : createInvoker(new lightOnCommand(new light()))
            break;

        case "off":
            isRedLightOn=false
            result = isRedLightOn ? createInvoker(new lightOffCommand(new RedLight())) : createInvoker(new lightOnCommand(new light()))
            break

        case "increase":
            result = isRedLightOn ? createInvoker(new increaseLuminosityCommand(new RedLight())) : createInvoker(new lightOnCommand(new light()))

            break

        case "decrease":
            console.log("decrease")
            result =isRedLightOn?createInvoker(new decreaseLuminosityCommand(new RedLight())) : createInvoker(new lightOnCommand(new light()))
            break

        case "red":
            isRedLightOn = true
            result=isRedLightOn?createInvoker(new lightOnCommand(new RedLight())):  createInvoker(new lightOnCommand(new light()))
            break
        default:

    }
    // @ts-ignore
    return result;

}