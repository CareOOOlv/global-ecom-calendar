import urllib.request, json, gzip

HOST = "https://n73jphyg4c.re.qweatherapi.com"
KEY = "495fa5bbe04144b9b755c4336963f447"

# Sub-region cities → QWeather city IDs will be populated here
# First batch: lookup using geo API
cities = [
    ("伦敦", "London", "GB"), ("巴黎", "Paris", "FR"), ("柏林", "Berlin", "DE"),
    ("马德里", "Madrid", "ES"), ("里斯本", "Lisbon", "PT"),
    ("利雅得", "Riyadh", "SA"), ("迪拜", "Dubai", "AE"), ("多哈", "Doha", "QA"),
    ("伊斯坦布尔", "Istanbul", "TR"), ("特拉维夫", "Tel Aviv", "IL"),
    ("新加坡", "Singapore", "SG"), ("吉隆坡", "Kuala Lumpur", "MY"),
    ("曼谷", "Bangkok", "TH"), ("河内", "Hanoi", "VN"),
    ("雅加达", "Jakarta", "ID"), ("马尼拉", "Manila", "PH"),
    ("东京", "Tokyo", "JP"), ("大阪", "Osaka", "JP"),
    ("首尔", "Seoul", "KR"), ("釜山", "Busan", "KR"),
    ("纽约", "New York", "US"), ("多伦多", "Toronto", "CA"),
    ("悉尼", "Sydney", "AU"), ("奥克兰", "Auckland", "NZ"),
    ("墨西哥城", "Mexico City", "MX"), ("圣保罗", "Sao Paulo", "BR"),
    ("布宜诺斯艾利斯", "Buenos Aires", "AR"),
    ("圣地亚哥", "Santiago", "CL"), ("波哥大", "Bogota", "CO"),
    ("莫斯科", "Moscow", "RU"), ("基辅", "Kyiv", "UA"), ("华沙", "Warsaw", "PL"),
]

print("Looking up city IDs via geo API...")
results = []
for cn_name, en_name, country in cities:
    try:
        # Try English name first for better results
        url = f"{HOST}/geo/v2/city/lookup?location={urllib.parse.quote(en_name)}&key={KEY}&range={country.lower()}"
        req = urllib.request.Request(url, headers={"Accept-Encoding": "gzip"})
        resp = urllib.request.urlopen(req)
        raw = resp.read()
        try:
            raw = gzip.decompress(raw)
        except:
            pass
        data = json.loads(raw)
        locs = data.get("location", [])
        if locs:
            l = locs[0]
            results.append((cn_name, l["id"], l["name"], l["country"]))
            print(f"  {cn_name:10s} => {l['id']:12s} | {l['name']:10s} | {l['country']}")
        else:
            print(f"  {cn_name:10s} => NOT FOUND")
    except Exception as e:
        print(f"  {cn_name:10s} => ERROR: {e}")

# Now verify each city's weather
print("\n\nVerifying weather data for each city...")
for cn_name, lid, name, country in results:
    try:
        url = f"{HOST}/v7/weather/now?location={lid}&key={KEY}"
        req = urllib.request.Request(url, headers={"Accept-Encoding": "gzip"})
        resp = urllib.request.urlopen(req)
        raw = resp.read()
        try:
            raw = gzip.decompress(raw)
        except:
            pass
        data = json.loads(raw)
        if data.get("code") == "200":
            n = data["now"]
            print(f"  {cn_name:10s} ({lid}) => {n['temp']}°C | {n['text']} | {n.get('windDir','?')}{n.get('windScale','?')}级")
        else:
            print(f"  {cn_name:10s} ({lid}) => ERROR code={data.get('code')}")
    except Exception as e:
        print(f"  {cn_name:10s} ({lid}) => ERROR: {e}")
