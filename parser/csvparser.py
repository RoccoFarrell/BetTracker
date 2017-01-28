import csv
import re
#open Write file
with open('formattedGCData.csv', 'wt', newline='') as writefile:
	writer = csv.writer(writefile, 'excel')
	
	#test
	#for file_line in range(1, 2):
	with open(filename, 'rt', encoding='UTF8') as readfile:
		reader = csv.reader(readfile)
		read_row = next(reader)
		card_count = 0

		writer.writerow(['','','',''])
		ncol=len(next(reader)) # Read first line and count columns
		readfile.seek(0)
		
		#loop through lines in readfile
		for read_row in reader:
			row_count = 0
			
			for cell in range(0, ncol):
				writer.writerow(['','','',''])				

	