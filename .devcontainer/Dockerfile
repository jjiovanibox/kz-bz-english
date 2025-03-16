# ベースイメージとして指定されたPython 3.13.2を使用
FROM python:3.13.2

# 作業ディレクトリを設定
WORKDIR /app

# 必要な依存関係をコピー（requirements.txtがある場合）
COPY requirements.txt .

# 必要なツール(vimとcurl)をインストール
RUN apt-get update && apt-get install -y vim curl && apt-get clean && echo "source /usr/share/bash-completion/completions/git" >> ~/.bashrc

# パッケージをインストール
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコンテナにコピー
COPY . .

# コンテナ起動時のデフォルトコマンドを設定
# CMD ["python", "app.py"]
