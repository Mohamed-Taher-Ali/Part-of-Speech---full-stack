import React from 'react';
import { Colors } from 'src/config/enums';
import { Pos } from '../Options';

export default function Question({
    selectedPos,
    rightPos,
    word,
}: QuestionProps) {
    return (
        <div style={{
            color: Colors.MAIN,
            fontSize: '40px',
            padding: '28px',
        }}>
            <span style={{ fontSize: '110px' }}>{word} </span>
            <span>is </span>
            <span
                style={{
                    ...(selectedPos && {
                        color: rightPos === selectedPos
                            ? Colors.ACCEPT
                            : Colors.ERROR
                    })
                }}
            >{selectedPos ? `(${selectedPos})` : '...............'}</span>
        </div>
    )
}

export interface QuestionProps {
    word: string;
    rightPos: Pos;
    selectedPos?: Pos;
}