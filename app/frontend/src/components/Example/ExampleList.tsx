import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What does the RFP say about people who are incarcerated?",
        value: "What does the RFP say about peopÏle who are incarcerated? Give in a list format.?"
    },
    {
        text: "What are the eligibility requirements?",
        value: "What are the eligibility requirements? Give in a list format."
    },
    {
        text: "Write a long executive summary.",
        value: "Write a long executive summary responding to the Catalyst Grant RPF explaining why my non-profit should get a grant. Things about my org, 1. we advocating for a cap on punishments for serious offenses at 20 years and a universal “second look” review process, 2. we do local campaign efforts focused on ending disenfranchisement and expanding voting rights to citizens with felony convictions, 3. we make data driven decisions to ensure we are allocating resources to the optimal areas. Emphasis how my org aligns with the objectives of the Catalyst RFP."
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
