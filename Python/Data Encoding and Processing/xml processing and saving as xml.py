from xml.etree.ElementTree import  parse, Element
doc = parse('pred.xml')
print(doc)

root = doc.getroot()
print(root)

root.remove(root.find('sri'))
root.remove(root.find('cr'))
print(root.getchildren().index(root.find('nm')))

e = Element('spam')
e.text = "this is a text"
root.insert(2,e)

doc.write('newpred.xml', xml_declaration=True)