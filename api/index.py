from fastapi import FastAPI
from pydantic import BaseModel
import requests

app = FastAPI()

class University(BaseModel):
    name: str
    country: str

@app.get("/api/python")
def read_root():
    response = requests.get('http://universities.hipolabs.com/search?country=switzerland')
    data = response.json()
    universities = [University(**item) for item in data]
    university_names = [university.name for university in universities]
    return {"university_names": university_names}
