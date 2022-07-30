import React, { useEffect, useState } from 'react';
import {rank as getRank} from '../../services/words.services';
import { Colors } from 'src/config/enums';
import Button from '../Button';


export default function Rank({
    score,
    onRetry
}: RankProps) {
    const [rank, setRank] = useState(0);

    useEffect(()=>{
        getRank(score)
        .then((res) =>setRank(res.data.rank));
    }, [score]);

    return (
        <div>
        <div style={{
            padding: '60px 0px',
            fontSize: '60px',
            color: Colors.MAIN,
        }}>
            <span>Your rank is</span>
            <span style={{fontSize: '80px'}}> {rank}%</span>
        </div>
        <div style={{margin: 'auto'}}>
            <Button
                text='< Retry >'
                onClick={() => {onRetry && onRetry()}}
            />
        </div>
    </div>
    )
}

interface RankProps {
    score: number;
    onRetry?: () => void;
}