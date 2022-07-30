import React from 'react';
import Options, { OptionsProps } from 'src/components/Options';
import Question, { QuestionProps } from 'src/components/Question';
import { Colors } from 'src/config/enums';

export default function QuesAns({
    containerStyle,
    quesProps,
    ansProps,
}: QuesAnsProps<QuestionProps, OptionsProps>) {
    
    return (
        <div
            style={{
                'border': `2px solid ${Colors.MAIN}`,
                'borderRadius': `10px`,
                ...containerStyle,
            }}
        >
            <Question {...quesProps} />
            <Options {...ansProps} />
        </div>
    )
}

interface QuesAnsProps<QuesProps, AnsProps> {
    containerStyle?: React.CSSProperties;
    quesProps: QuesProps;
    ansProps: AnsProps;
}