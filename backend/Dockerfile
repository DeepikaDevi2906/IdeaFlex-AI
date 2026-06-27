FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN python -m pip install --upgrade pip setuptools wheel
RUN pip config set global.retries 10 && pip config set global.timeout 120
RUN pip install faiss-cpu PyMuPDF chromadb onnxruntime
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000

CMD ["python", "app.py"]