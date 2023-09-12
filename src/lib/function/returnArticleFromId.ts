import { articles } from "../article/articles";

export const returnArticleFromId = (id: number) => {
    const article = articles.filter(item => item.id === id);
    return article;
};
