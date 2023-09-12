export const formattedDate = (date: string) => {
    return new Date(date).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long' });
};
