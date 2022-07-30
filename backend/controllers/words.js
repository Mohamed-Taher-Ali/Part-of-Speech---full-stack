const
    { respError, roundToHundredth, arrayArrangeRandomly } = require('../config/helper'),
    { getWordsValidate, rankValidate } = require('../validations/words'),
    { scoresList, wordList } = require('../models/TestData.json');


exports.rank = async ({ score }) => {
    const { error } = rankValidate({ score });
    if (error) return respError(error.message);

    const lowerScores = scoresList.filter(s => s < score);
    const rank = (lowerScores.length / scoresList.length) * 100;
    const rankRoundedNearestHundredth = roundToHundredth(rank);

    return { rank: rankRoundedNearestHundredth };
}


exports.getWords = async (count) => {
    const { error } = getWordsValidate({ count });
    if (error) return respError(error.message);

    const wordListReturn = [];
    const posDistinct = [...new Set(wordList.map(w => w.pos))];
    let wordListRandomly = arrayArrangeRandomly(wordList);

    count = parseInt(count || 10);

    count =
        count > wordList.length
            ? wordList.length
            : count < 4
                ? 4
                : count;

    if (count >= wordList.length) {
        return { words: arrayArrangeRandomly(wordList) };
    }

    posDistinct.map(pos =>
        wordListReturn.push(
            wordListRandomly.find(wordRandom =>
                wordRandom.pos === pos
            )
        )
    );

    wordListRandomly = wordListRandomly.filter(wR =>
        !wordListReturn.map(w => w.id).includes(wR.id)
    );

    wordListReturn.push(
        ...wordListRandomly.slice(0, count - posDistinct.length)
    );
    
    return { words: wordListReturn };
}