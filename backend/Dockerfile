FROM python:3.13

WORKDIR /app

COPY requirements.txt .

# Update packages and install any additional packages for DEV
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install packages in requirements.txt
RUN pip install --upgrade pip && \
    pip install --upgrade setuptools && \
    pip install --upgrade --no-cache-dir -r requirements.txt
COPY . .

CMD ["python", "app.py"]
