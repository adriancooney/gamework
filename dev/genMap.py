import random

#An altogether shitty script to generate a big map
f = open("../client/assets/map.json", "w") 
size = 80
map = range(size);

for index in map:
	map[index] = range(size)
	for ndex in map[index]:
		map[index][ndex] = random.randrange(0, 5)

f.write('{ "map": ' + str(map) + '}');
f.close()
