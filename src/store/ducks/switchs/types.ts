export interface SwitchState  {
    A: boolean,
    B: boolean,
    C: boolean,
    D: boolean,
}

export enum SwitchTypes{
    SWITCH_A = "@switch/SWITCH_A",
    SWITCH_B = "@switch/SWITCH_B",
    SWITCH_C = "@switch/SWITCH_C",
    SWITCH_D = "@switch/SWITCH_D",
    FINISH = "@switch/FINISH"
}