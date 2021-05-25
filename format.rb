require 'csv'    

csv_text = File.read('brotherhoodInfo.csv')
csv = CSV.parse(csv_text, :headers => false)
csv.each do |row|
  print("<tr>\n")
  print("\t<td>" + row[0] + "</td>\n")
  print("\t<td>" + row[1] + "</td>\n")
  print("\t<td>" + row[2] + "</td>\n")
  print("</tr>\n")
end