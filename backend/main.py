from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import requests

app = FastAPI()

url = "https://api.odcloud.kr/api/3074462/v1/uddi:161740bd-8ec5-4734-9a3d-f7a2cde34942?page=1&perPage=10&serviceKey=Pqah%2FE7nqe%2FQNOV8VamELc3HkATE6nr8RTGRTCA8qVK%2BcEQhNVedJrwZzhxXu%2B0c08Fc8SNSs84BbIEdhZz9nw%3D%3D"

response = requests.get(url)

app.add_middleware( #CORS 설정
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)


@app.get('/')
def read_root():
    data = response.json()
    return {"message":"success","data":data}
