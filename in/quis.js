const colorIndex = index % colors.length;
const letterIndex = index % letters.length;
const valueIndex = index % values.length;

tiles[index] = {
  id: index,
  color: colors[colorIndex],
  letter: letters[letterIndex],
  value: values[valueIndex],
  selected: false
};
