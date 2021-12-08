import random
from datetime import datetime

name = str(input('Enter your name:'))
print(name)
unique = random.randint(100,300)
print('Unique id:',unique)



x = datetime.today()
z = x.strftime('Current Date : %D')
y = x.strftime('Current Time : %H:%M:%S')
print(y)
print(z)

