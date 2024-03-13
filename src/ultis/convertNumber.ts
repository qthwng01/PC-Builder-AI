// Hàm convert chuỗi thành số theo định dạng ex: '4.000.000đ'
function convertStringToNumber(input: string): number {
  // Xóa dấu chấm và ký tự 'đ'
  const cleanedString = input.replace(/\./g, '').replace('đ', '')
  // Chuyển đổi chuỗi thành số
  const numberValue = parseFloat(cleanedString)
  return numberValue
}

export default convertStringToNumber
