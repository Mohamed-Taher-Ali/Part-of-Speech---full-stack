import React, { useEffect, useState } from 'react';
import { Colors } from 'src/config/enums';
import Button from '../Button';


export default function Options({
    item,
    onSelect
}: OptionsProps) {
    const [disabled, setDisabled] = useState(false);
    const [opt, setOpt] = useState(Array(4).fill(''));

    useEffect(()=>{
        setDisabled(false);
        setOpt(Array(4).fill(''));
    }, [item.id]);

    const onSelectHandler = (pos: Pos, ind: number) => {
        setDisabled(true);
        const score = pos === item.pos ? 10 : 0;
        onSelect(pos, score);

        const newOpts = [...opt];
        newOpts[ind] = pos;
        setOpt(newOpts);
    }

    return (
        <div>
            <div className='rows-ops'>
                <Option
                    onSelectHandler={(pos, ind) => onSelectHandler(pos, ind)}
                    disabled={disabled}
                    itemPos={item.pos}
                    optType={opt[0]}
                    pos={'adjective'}
                    ind={0}
                />
                <Option
                    onSelectHandler={(pos, ind) => onSelectHandler(pos, ind)}
                    disabled={disabled}
                    itemPos={item.pos}
                    optType={opt[1]}
                    pos={'adverb'}
                    ind={1}
                />
            </div>
            <div className='rows-ops'>
                <Option
                    onSelectHandler={(pos, ind) => onSelectHandler(pos, ind)}
                    disabled={disabled}
                    itemPos={item.pos}
                    optType={opt[2]}
                    pos={'noun'}
                    ind={2}
                />
                <Option
                    onSelectHandler={(pos, ind) => onSelectHandler(pos, ind)}
                    disabled={disabled}
                    itemPos={item.pos}
                    optType={opt[3]}
                    pos={'verb'}
                    ind={3}
                />
            </div>
            <style>
                {`
                    .rows-ops {
                            display: flex;
                            flex-direction: row;
                            align-items: center;
                            margin: 30px 0;
                            justify-content: space-evenly;
                    }
                `}
            </style>
        </div>
    );
}


const Option = ({
    onSelectHandler,
    ind,
    disabled,
    optType,
    pos,
    itemPos,
}: OptionProp) => {
    return (
        <Button
            onClick={() => onSelectHandler(pos, ind)}
            text={pos}
            disabled={disabled}
            style={{
                width: '30%',
                ...(optType && {
                    backgroundColor: optType === itemPos ? Colors.ACCEPT : Colors.ERROR,
                    color: Colors.FORE
                })
            }}
        />
    )
}

interface OptionProp {
    onSelectHandler: (pos: Pos, ind: number) => void,
    disabled: boolean,
    optType: string,
    itemPos: Pos;
    ind: number,
    pos: Pos;
}

export type Pos = 'adverb' | 'verb' | 'noun' | 'adjective';

export interface OptionsProps {
    item: Item;
    onSelect: (pos: Pos, score: number) => void;
}

export interface Item {
    id: number;
    word: string;
    pos: Pos;
}