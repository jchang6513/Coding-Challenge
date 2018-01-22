import json
from pprint import pprint
import xml.etree.ElementTree as ET
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

tree = ET.parse('forecast.xml')
root = tree.getroot()
print(root)

data = json.load(open('data.json'));
oTemp = data['body']['modules'][0]['dashboard_data']['Temperature'];
oMTemp = data['body']['modules'][0]['dashboard_data']['max_temp'];
omTemp = data['body']['modules'][0]['dashboard_data']['min_temp'];
oHum = data['body']['modules'][0]['dashboard_data']['Humidity'];
oPr = data['body']['devices'][0]['dashboard_data']['Pressure'];

iTemp = data['body']['devices'][0]['dashboard_data']['Temperature'];
iMTemp = data['body']['devices'][0]['dashboard_data']['max_temp'];
imTemp = data['body']['devices'][0]['dashboard_data']['min_temp'];
iHum = data['body']['devices'][0]['dashboard_data']['Humidity'];
iCO2 = data['body']['devices'][0]['dashboard_data']['CO2'];
iNoi = data['body']['devices'][0]['dashboard_data']['Noise'];

fig = plt.figure()
fig.set_size_inches(16,9)
plt.axes([-0.1,-0.1,1.2,1.2])
plt.rcParams["font.family"] = "Gill Sans MT"
plt.fill_between([0,6],4,10,color='#87CEFA')
plt.fill_between([6,10],4,10,color='white')
plt.fill_between([0,10],0,4,color='#00477D')

plt.text(0.8,8,'Cloudy',fontsize=80,color='white')
plt.text(3,8,oTemp,fontsize=90,color='white')
plt.text(4.5,8.6,oMTemp,fontsize=20,color='white')
plt.text(4.5,8,omTemp,fontsize=20,color='white')
plt.text(1,6,oHum,fontsize=80,color='white')
plt.text(1.8,6,'%',fontsize=30,color='white')
plt.text(3,6,oPr,fontsize=80,color='white')
plt.text(4.9,6,'mbar',fontsize=30,color='white')

plt.text(6.5,8,iTemp,fontsize=90,color='black')
plt.text(8,8.6,iMTemp,fontsize=20,color='black')
plt.text(8,8,imTemp,fontsize=20,color='black')
plt.text(6.5,6,iCO2,fontsize=80,color='black')
plt.text(8,6,iHum,fontsize=80,color='black')
plt.text(8.8,6,'%',fontsize=30,color='black')
plt.text(9,6,iNoi,fontsize=80,color='black')



plt.axis('off');
plt.show();