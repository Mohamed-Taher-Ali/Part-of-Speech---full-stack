import React from 'react';
import { Colors } from 'src/config/enums';

export default function Progress({
    percentage
}: ProgressProps) {

    const styles = {
        cont: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '30px 0px',
        },
        back: {
            width: '97%',
            height: '10px',
            backgroundColor: Colors.BACK,
            borderRadius: '10px',
        },
        prog: {
            width: `${percentage}%`,
            height: '10px',
            backgroundColor: Colors.MAIN,
            borderRadius: '10px',
        }
    };

    return (
        <div style={styles.cont}>
            <div style={styles.back}>
                <div style={styles.prog}></div>
            </div>
            <div>{Math.ceil(percentage)}%</div>
        </div>
    )
}

interface ProgressProps {
    percentage: number;
}