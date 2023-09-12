export const returnCategorySelected = (selectedCategoryes: string[], category: string) => {
    if (selectedCategoryes.length === 0) {
        if (category === 'all') {
            return true;
        } else {
            return false;
        }
    } else {
        if (category) {
            for (let i = 0; i < selectedCategoryes.length; i++) {
                if (selectedCategoryes[i] === category) {
                    return true;
                };
            };

            return false;
        }
    }
};
