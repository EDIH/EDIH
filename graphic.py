from math import *
from tkinter import *

# f = input('f(x):')

# root = Tk()

# canv = Canvas(root, width = 1000, height = 1000, bg = "white")
# canv.create_line(500,1000,500,0,width=2,arrow=LAST) 
# canv.create_line(0,500,1000,500,width=2,arrow=LAST) 

# First_x = -500;

# for i in range(500):
#     x = First_x + 2 * i
#     new_f = f.replace('x', str(x))
#     y = -eval(new_f) + 500
#     x += 500
#     canv.create_oval(x, y, x + 1, y + 1, fill = 'red')




root = Tk()
canv = Canvas(root, width = 1000, height = 1000, bg = "white")
for i in range(500):
	x = i*2
	y = i*2
	canv.create_line(x, 0, x, 1000, width = 1)
	canv.create_line(0, y, 1000, y, width = 1)

canv.pack()	
root.mainloop()