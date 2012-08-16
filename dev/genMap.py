import random

#An altogether shitty script to generate a big map
f = open("../client/assets/map.json", "w") 
size = 80
map = range(size);

for index in map:
	map[index] = range(size)
	for ndex in map[index]:
		map[index][ndex] = 1#random.randrange(0, 5)

f.write('{ "tiles": ' + str(map) + '}');
f.close()
