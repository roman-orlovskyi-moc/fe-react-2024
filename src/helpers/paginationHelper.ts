export const calculateTotalPages = (total: number, limit: number): number => Math.ceil(total / limit);

export const getPagination = (page: number, totalPages: number): number[] => {
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
        const startPage = Math.max(2, page - 1);
        const endPage = Math.min(totalPages - 1, page + 1);

        if (page < 2) {
            return [1, 2, -1, totalPages];
        } else if (page <= 3) {
            return [1, 2, 3, -1, totalPages];
        } else if (page >= totalPages - 1) {
            return [1, -1, totalPages - 1, totalPages];
        } else if (page >= totalPages - 2) {
            return [1, -1, totalPages - 2, totalPages - 1, totalPages];
        } else {
            return [1, -1, startPage, page, endPage, -1, totalPages];
        }
    }
};
