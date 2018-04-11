import requests

url = "https://pisa.ucsc.edu/class_search/"
data = {
        "action": "results",
        "binds[:term]": 2178,
}

r = requests.post(
        url,
        data=data
)

with open("out.html", 'w') as out:
    out.write(r.text)
print(r.text)
