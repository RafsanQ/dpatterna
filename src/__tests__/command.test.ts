import {createInvoker} from "../pages/hello-command/implimentation"
import {RemoteController,light, RedLight, lightOnCommand, lightOffCommand} from "../patterns/command/LightCommand"

const remoteController = new RemoteController();
describe("Light Command Pattern", () => {
    test("Light on",()=>{
        let expectation = createInvoker(new lightOnCommand(new light()))
        remoteController.setCommand(new lightOnCommand(new light))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    });
    test("Light off",()=>{
        let expectation = createInvoker(new lightOffCommand(new light()))
        remoteController.setCommand(new lightOffCommand(new light()))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    })


    test("Light Red",()=>{
        let expectation = createInvoker(new lightOnCommand(new RedLight()))
        remoteController.setCommand(new lightOffCommand(new RedLight()))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    })

    test("Light Red Luminosity +1",()=>{
        let expectation = createInvoker(new lightOnCommand(new RedLight()))
        remoteController.setCommand(new lightOffCommand(new RedLight()))
        let reality = remoteController.executeCommand()
        expect(expectation).toEqual(reality)
    })
})