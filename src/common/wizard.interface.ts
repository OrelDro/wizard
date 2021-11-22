export interface IWizard {
    name: string;
    sections: ISection[];
}

export interface ISection {
    name: string;
    steps: IStep[];
}

export interface IStep {
    name: string;
    question: string;
    type: string;
    values?: string[];
}
