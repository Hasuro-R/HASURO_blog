import { categoryes } from "../category/categoryes";

export const returnTechData = (category: string) => {
    const data = categoryes.filter(item => item.name === category);

    return data[0];
};
