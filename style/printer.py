import json

f = open('InlineSelector.json')
n = open('SelectorRaw.js', 'a')

data = json.load(f)
n.write("export default = ({")
for i in data:
    n.write(i+'="",')

n.write("}) => {")
n.write("return {")
for i in data:
    n.write(i+':'+i+",")
n.write("}")
n.write("}")
f.close()
