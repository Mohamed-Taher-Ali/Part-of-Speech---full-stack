import { useEffect, useState } from "react";
import { Item } from "src/components/Options";
import { getWords } from "src/services/words.services";

export default function useWords() {
    const [words, setWords] = useState<Item[]>([]);
    const [update, setUpdate] = useState(false);

    useEffect(()=> {
        getWords().then((data)=>{
            setWords(data.data.words);
        });
    }, [update]);

    const updateWords = () => {
        setUpdate(!update);
    }

    return {
        words,
        updateWords
    };
}