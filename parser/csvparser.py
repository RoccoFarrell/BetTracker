import csv
import re
import random
from datetime import datetime
#open Write file

filename = 'source.csv'
cell_count = 0
row_count = 0

with open('formattedData.txt', 'w', newline='') as writefile:
	writefile.write("{\ndata:\n\t[")	
	with open(filename, 'rt', encoding='UTF8') as readfile:
		reader = csv.reader(readfile)
		readfile.seek(0)
		ncol=len(next(reader)) # Read first line and count columns
		
		
		#loop through lines in readfile
		for read_row in reader:
			row_count += 1
			#print(random.randint(9000000000, 9999999999))

			date = datetime.strptime(read_row[0], '%m/%d/%Y %H:%M:%S')
			randid = random.randint(9000000000, 9999999999)
			
			print('\ttype: "bet",\n\tid: "{}"'.format(randid))
			writefile.write('\n\t{\n')
			writefile.write('\ttype: "bet",\n\tid: "{}",'.format(randid))
			writefile.write('\n\tattributes: {\n')
			writefile.write('\t\tamount: "{}",'.format(read_row[3]))
			writefile.write('\n\t\tdescription: "{}",'.format(read_row[4]))
			writefile.write('\n\t\tdatecreated: "{}",'.format(date))
			writefile.write('\n\t\tactiveflag: "{}",'.format(read_row[5]))
			writefile.write('\n\t\tdatesettled: "{}",'.format(date))
			writefile.write('\n\t\twinner: "{}",'.format(read_row[6]))
			writefile.write('\n\t\tpaidflag: "{}",'.format(read_row[8]))
			writefile.write('\n\t\tdatepaid: "{}",'.format(date))
			writefile.write('\n\t\tcategory: "{}",'.format(read_row[9]))
			writefile.write('\n\t\tparticipants: [')
			writefile.write('\n\t\t\t"{}",'.format(read_row[1]))
			writefile.write('\n\t\t\t"{}"'.format(read_row[2]))
			writefile.write('\n\t\t]\n\t\t}')
			writefile.write('\n\t},')

			#for cell in range(0, ncol):
		
		writefile.write('}')		
							
print("row count: ", row_count)
#print("cell_count: ", cell_count)
	