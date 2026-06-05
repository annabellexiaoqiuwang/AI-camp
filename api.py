import requests
def getDuck():
    response = requests.get("https://random-d.uk/api/v2/random")
    response = response.json()
    print (response)
getDuck()
def getUselessFact():
    response = requests.get("https://uselessfacts.jsph.pl/random.json?language=en")
    response = response.json()
    print (response)
getUselessFact()
def getMeal():
    response = requests.get("https://www.themealdb.com/api/json/v1/1/random.php")
    response = response.json()
    print (response)
getMeal()

