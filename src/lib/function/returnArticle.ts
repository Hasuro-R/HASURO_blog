import type { articleType } from "../../types/articleType";

export const returnArticle = (selectCategoryes: string[], article: articleType) => {
    if (selectCategoryes.length === 0) {
        return true;
    } else {
        for (let i = 0;i < selectCategoryes.length;i++) {
            if (!article.categoryes.includes(selectCategoryes[i])) {
                return false;
            };
        };

        return true;
    };
};
