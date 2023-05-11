import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the topic requirements?",
        value: "What are the topic requirements?"
    },
    {
        text: "What are some ideas on how to use data to facilitate justice reform?",
        value: "What are some ideas on how to use data to facilitate justice reform among government officials?"
    },
    { text: "What Microsoft products are mentioned?", value: "What Microsoft products are mentioned in the Catalyst Grant Program Request for Proposal?" }
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
