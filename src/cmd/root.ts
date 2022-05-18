import { CmdDefinition, BoolFlag, CmdParserOptions, ValueFlag } from 'cmdy';
import { absolutPath } from "pathsfilter/dist/index"

export const verbose: BoolFlag = {
    name: "verbose",
    shorthand: "v",
    description: "Show basic flag adn target informations.",
}

export const configPath: ValueFlag = {
    name: "config-path",
    alias: ["cpath", "config"],
    description: "A relative or absolute path to the NWM config file.",
    types: ["string"],
    default: "global-config.json"
}

export const root: CmdDefinition = {
    name: "npwm",
    description: "Node package workspace manager, the administrator of your packages.",
    details: "NPWM means 'node workspace manager' and is a package to manage other packages.",
    flags: [
        verbose,
        configPath,
    ],
    exe: async (cmd) => {
        const configPath = absolutPath(cmd.valueFlags["config-path"])
        console.log("Node workspace manager: ", configPath)
    }
}

export const cmd: CmdParserOptions = {
    cmd: root
}

export default cmd