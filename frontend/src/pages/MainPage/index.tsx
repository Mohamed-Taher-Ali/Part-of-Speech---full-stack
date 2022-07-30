import React, { useState } from 'react';
import Progress from 'src/components/Progress';
import { Pos } from 'src/components/Options';
import QuesAns from 'src/components/QuesAns';
import useWords from 'src/hooks/useWords';
import Rank from 'src/components/Rank';



export default function MainPage() {
    const [selectedPos, setSelectedPos] = useState<Pos | undefined>();
    const [currentInd, setCurrentInd] = useState(0);
    const { updateWords, words } = useWords();
    const [score, setScore] = useState(0);

    const onSelect = (pos: Pos, ansScore: number) => {
        const nextInd = currentInd + 1;

        setScore(score + ansScore);
        setSelectedPos(pos);

        if (nextInd < words.length) {
            setTimeout(() => {
                setCurrentInd(nextInd);
                setSelectedPos(undefined);
            }, 1000);
        } else {
            setSelectedPos(undefined);
            setCurrentInd(nextInd);
        }
    }

    const styles = {
        cont: {
            width: '80%',
            margin: '5% auto',
        },
        nextCont: {
            justifyContent: 'flex-end',
            marginTop: '20px',
            display: 'flex',
        }
    }

    return !words.length ? <></> : (
        <div style={styles.cont}>
            <Progress percentage={(currentInd / words.length) * 100} />
            {
                currentInd < words.length
                    ? (
                        <QuesAns
                            quesProps={{
                                selectedPos: selectedPos,
                                rightPos: words[currentInd].pos,
                                word: words[currentInd].word,
                            }}
                            ansProps={{
                                item: words[currentInd],
                                onSelect: onSelect
                            }}
                        />
                    )
                    : (
                        <Rank
                            score={score}
                            onRetry={() => {
                                updateWords();
                                setCurrentInd(0);
                            }}
                        />
                    )
            }
        </div>
    )
}