import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How does RDOF compare to CAF II?",
        value: "How does RDOF compare to CAF II?"
    },
    {
        text: "Write a press release about Nextlink, CAF Phase II, fixed wireless, and fiber.",
        value: "Write a press release about Nextlink and CAF Phase II pointing out the importance of fixed wireless over fiber. Include a quote from the Nextlink CEO."
    },
    { text: "What can HBCU's do with the CHIPS act?", value: "What can HBCU's do with the CHIPS act? Give a long detailed answer." }
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
