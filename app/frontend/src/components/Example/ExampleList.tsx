import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the BOOT program?",
        value: "What is the BOOT program?"
    },
    {
        text: "Write a press release about Nextlink winning BOOT funding.",
        value: "Write a press release about Nextlink winning BOOT funding, pointing out the importance of fixed wireless over fiber. Include a quote from the Nextlink CEO."
    },
    { text: "What are the BOOT funding levels?", value: "What are the BOOT funding levels?" }
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
