import api from "./api"

export const getWords = (count=10) => {
    return api.get(`/words?count=${count}`);
};

export const rank = (score: number) => {
    return api.post(`/words/rank`, {
        score
    });
};