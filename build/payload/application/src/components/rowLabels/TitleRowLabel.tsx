const TitleRowLabel = (itemName: string = 'Item', titleField: string = 'title') => {
  return ({ data, index }) => {
    return (Boolean(data[titleField])) || `${itemName} ${String(index).padStart(2, '0')}`
  }
}

export default TitleRowLabel
