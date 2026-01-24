import os
import requests
from datetime import datetime

USERNAME = "CreepyLewis"
TOKEN = os.environ["GH_TOKEN"]

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

QUERY = """
query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
"""

res = requests.post(
    "https://api.github.com/graphql",
    json={"query": QUERY, "variables": {"login": USERNAME}},
    headers=HEADERS
)

data = res.json()["data"]["user"]["contributionsCollection"]["contributionCalendar"]

# Flatten days
days = []
for week in data["weeks"]:
    days.extend(week["contributionDays"])

total_contributions = sum(d["contributionCount"] for d in days)

# Calculate streaks
current_streak = 0
longest_streak = 0
temp_streak = 0

days_sorted = sorted(days, key=lambda x: x["date"])

for d in days_sorted:
    if d["contributionCount"] > 0:
        temp_streak += 1
        longest_streak = max(longest_streak, temp_streak)
    else:
        temp_streak = 0

# Current streak (from today backwards)
for d in reversed(days_sorted):
    if d["contributionCount"] > 0:
        current_streak += 1
    else:
        break

start_date = days_sorted[0]["date"]
end_date = datetime.today().strftime("%b %d, %Y")

svg = f"""
<svg width="800" height="180" viewBox="0 0 800 180"
     xmlns="http://www.w3.org/2000/svg">

  <style>
    .bg {{ fill: #161b22; }}
    .title {{ fill: #ff9f1c; font-size: 18px; font-family: monospace; }}
    .label {{ fill: #8b949e; font-size: 13px; font-family: monospace; }}
    .value {{ fill: #c9d1d9; font-size: 28px; font-family: monospace; }}
  </style>

  <rect x="0" y="0" rx="16" ry="16" width="800" height="180" class="bg"/>

  <text x="30" y="35" class="title">GITHUB ACTIVITY</text>

  <text x="30" y="75" class="label">Total Contributions</text>
  <text x="30" y="110" class="value">{total_contributions}</text>

  <text x="300" y="75" class="label">Current Streak</text>
  <text x="300" y="110" class="value">{current_streak}</text>

  <text x="550" y="75" class="label">Longest Streak</text>
  <text x="550" y="110" class="value">{longest_streak}</text>

  <text x="30" y="150" class="label">{start_date} – {end_date}</text>

</svg>
"""

os.makedirs("stats", exist_ok=True)
with open("stats/stats.svg", "w") as f:
    f.write(svg)
