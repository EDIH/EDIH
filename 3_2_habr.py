import urllib
f1=urllib.urlopen(str(raw_input('enter url: ')))
f2=open('write.html', 'w')
i = 0
for line in f1.readlines():
    f2.write(line)
    i+=1
f2.close()
f1.close()
print(i)