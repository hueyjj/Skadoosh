import requests

url = "https://pisa.ucsc.edu/class_search/"
data = {
        "action": "detail",
        "class_data[:STRM]": 2182,
        "class_data[:CLASS_NBR]": 63223,
        "binds[:term]": 2182,
}

r = requests.post(
        url,
        data=data
)

with open("outclass.html", 'w') as out:
    out.write(r.text)
print(r.text)
