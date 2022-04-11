export const getPageCount = (totalCount, limit) =>
  Math.ceil(totalCount / limit);

// Сделать кэширование, чтобы не пересчитывался массив при каждом рендере
// С помощью useMemo. Можно это сделать через свой хук usePagination
export const getPagesArray = (totalPages) => {
  const result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};
