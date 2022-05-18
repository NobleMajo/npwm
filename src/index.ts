import { parseCmd } from "cmdy"
import root from "./cmd/root"

parseCmd(root)
    .exe()
    .catch((err: Error | any) => console.error(
        "# NWMM Error #\n", err
    ))